import { useEffect, useState } from "react";
import { EmptyHomeContainer, LayoutContainer, GroupsTable, LoadingContainer} from "./styles";
import { apiGateway } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Spinner } from "phosphor-react";

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
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    getCompanies();
  }, [token]);

  function handleGroupClick(companyId: string) {
    navigate("/group", { state: {companyId} });
  }

  return(
    <LayoutContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner size={24}/>
          <p>Loading...</p>
        </LoadingContainer>
      ) : (
        companies.length === 0 ? (
          <EmptyHomeContainer>
            <strong>You don't belong to any group yet</strong>
            <p>To get started, you can join an existing group or create your own.</p>
          </EmptyHomeContainer>
        ) : (
          <GroupsTable>
            <tbody>
              {companies.map((company) => (
                <tr 
                  key={company.id}
                  onClick={() => handleGroupClick(company.id)}
                >
                  <td>{company.name}</td>
                </tr>
              ))}
            </tbody>
          </GroupsTable>
        ))}
    </LayoutContainer>
  );
}