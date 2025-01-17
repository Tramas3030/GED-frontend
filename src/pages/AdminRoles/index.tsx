import { useLocation } from "react-router-dom";
import { EditPermissionsButtonContainer, EmployeesTable, LayoutContainer } from "./styles";
import { useEffect, useState } from "react";
import { apiGateway } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import * as Dialog from "@radix-ui/react-dialog";
import { ChangeEmployeesPermissionsModal } from "./components/ChangeEmployeesPermissionsModal";

interface MembersArray {
  id: string;
  username: string;
  permissions: string[];
}

interface TokenPayload {
  sub: string;
}

export function AdminRoles() {
  const { token } = useAuth();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const [members, setMembers] = useState<MembersArray[]>([]);

  const decodedToken = jwtDecode<TokenPayload>(token!);
  const adminEmail = decodedToken.sub;

  useEffect(() => {
    const getArrayOfCompanyMembers = async () => {
      try {
        const response = await apiGateway.get(`/v1/api/company/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMembers(response.data.members);
        
      } catch (error) {
        console.log("Error fetching company members: ", error);
      }
    };

    getArrayOfCompanyMembers();
  }, [companyId, token]);

  return(
    <LayoutContainer>
      <EmployeesTable>
        <thead>
          <tr>
            <th>Email</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members
            .filter((member) => member.username !== adminEmail)
            .map((member) => (
              <tr key={member.id}>
                <td>{member.username}</td>
                <td>
                  {member.permissions.join(", ").toLowerCase()}
                </td>
                <td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <EditPermissionsButtonContainer>
                        Edit permissions
                      </EditPermissionsButtonContainer>
                    </Dialog.Trigger>

                    <ChangeEmployeesPermissionsModal />
                  </Dialog.Root>
                </td>
              </tr>
            ))}
        </tbody>
      </EmployeesTable>
    </LayoutContainer>
  )
}