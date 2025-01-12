import { useEffect, useState } from "react";
import { EmptyHomeContainer, LayoutContainer, GroupsTable} from "./styles";
import { apiGateway } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

interface Company {
  id: string;
  name: string;
  isVisible: boolean;
}

interface TokenPayload {
  sub: string;
}

export function Home() {
  const { token } = useAuth();
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const decodedToken  = jwtDecode<TokenPayload>(token!);
        const email = decodedToken.sub;

        const response = await apiGateway.get(`/v1/api/company/user/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        setCompanies(response.data);
      } catch (error) {
        console.log("Error fetching companies: ", error);
      }
    };

    getCompanies();
  }, [token]);

  return(
    <LayoutContainer>
      {companies.length === 0 ? (
        <EmptyHomeContainer>
          <strong>You don't belong to any group yet</strong>
          <p>To get started, you can join an existing group or create your own.</p>
        </EmptyHomeContainer>
      ) : (
        <GroupsTable>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
              </tr>
            ))}
          </tbody>
        </GroupsTable>
      )}

    </LayoutContainer>
  )
}