import { useLocation, useNavigate } from "react-router-dom";
import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import * as Dialog from "@radix-ui/react-dialog";

import { 
  ButtonsGroupContainer,
  GroupsTable, 
  HandleMembersPermissionsButtonContainer, 
  LayoutContainer, 
  SearchFormAndButtonContainer, 
  SeeMembersRequestsButtonContainer, 
  UploadDocumentButtonContainer 
} from "./styles";

import { SearchForm } from "./components/SearchForm";
import { Tag } from "./components/Tag";
import { UploadDocumentModal } from "./components/UploadDocumentModal";
import { useAuth } from "../../contexts/AuthContext";
import { apiGateway } from "../../lib/axios";

interface TokenPayload {
  sub: string;
}

interface Member {
  username: string;
  permissions: string[];
}

interface ApiResponse {
  id: string;
  name: string;
  createdBy: string;
  members: Member[];
}

export function Group() {
  const navigate = useNavigate();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const { token } = useAuth();
  const [userPermissions, setUserPermissions] = useState<string[]>([]);
  
  const decodedToken = jwtDecode<TokenPayload>(token!);
  const userEmail = decodedToken.sub;
 
  useEffect(() => {
    const getUserPermissions = async () => {
      try {
        const response = await apiGateway.get<ApiResponse>(`/v1/api/company/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const currentMember = response.data.members.find((member) => member.username === userEmail);

        if(currentMember) {
          setUserPermissions(currentMember.permissions);
        }
      }
      catch (error) {
        console.log("Error fetching user permissions: ", error);
      }
    }

    getUserPermissions();
  }, [token, companyId, userEmail]);

  const hasUploadDocumentPermission = userPermissions.includes("UPLOAD");
  const hasSeeMembersRequestsPermission = userPermissions.includes("MANAGE_USERS");
  const hasHandleMembersPermissionsPermission = userPermissions.includes("GRANT_PERMISSIONS");

  function handleTableGroupClick() {
    navigate("/document/details");
  }

  function handleUploadDocumentButtonClick() {
    navigate("/document/upload");
  }

  function handleSeeMembersRequestsButtonClick() {
    navigate("/group/admin", { state: { companyId } });
  }

  function handleMembersPermissionsButtonClick() {
    navigate("/group/admin/roles");
  }
 
  function handleTrashClick(event: React.MouseEvent) {
    event?.stopPropagation();
  }

  return(
    <LayoutContainer>
      <SearchFormAndButtonContainer>
        <SearchForm />

        <ButtonsGroupContainer>
          {hasHandleMembersPermissionsPermission && (
            <HandleMembersPermissionsButtonContainer onClick={handleMembersPermissionsButtonClick}>Handle members permissions</HandleMembersPermissionsButtonContainer>
          )}
          {hasSeeMembersRequestsPermission && (
            <SeeMembersRequestsButtonContainer onClick={handleSeeMembersRequestsButtonClick}>See members requests</SeeMembersRequestsButtonContainer>
          )}
          {hasUploadDocumentPermission && (
            <UploadDocumentButtonContainer onClick={handleUploadDocumentButtonClick}>Upload document</UploadDocumentButtonContainer>
          )}
        </ButtonsGroupContainer>
      </SearchFormAndButtonContainer>

        <GroupsTable>
          <tbody onClick={handleTableGroupClick}>
            <tr>
              <td>Document 1.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corporis atque quae, veritatis error doloribus molestiae suscipit fuga rerum ipsa impedit blanditiis laborum voluptatum dolorum quaerat quasi esse libero itaque.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Trash size={24}/>
                  </Dialog.Trigger>

                  <UploadDocumentModal />
                </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 2.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti numquam nihil ipsam aut impedit temporibus provident obcaecati dicta autem totam fugit voluptatibus dolores, expedita ullam vitae odio necessitatibus? Maxime.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Trash size={24}/>
                    </Dialog.Trigger>

                    <UploadDocumentModal />
                  </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 3.pdf</td>
              <td className="textPreview">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut nobis sit maiores id numquam facilis consequatur iure at nisi praesentium, enim ipsa quidem, quos similique in dolores distinctio reprehenderit.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <Trash size={24}/>
                    </Dialog.Trigger>

                    <UploadDocumentModal />
                  </Dialog.Root>
              </td>
            </tr>

            <tr>
              <td>Document 4.pdf</td>
              <td className="textPreview">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis voluptate, nesciunt soluta, quas dolorum minima voluptatem laboriosam eius labore inventore ab magnam beatae quam nam illo magni repellendus maiores rerum.</td>
              <td>
                <Tag text="Category"/>
              </td>
              <td onClick={handleTrashClick}>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Trash size={24}/>
                  </Dialog.Trigger>

                  <UploadDocumentModal />
                </Dialog.Root>
              </td>           
            </tr>
          </tbody>
        </GroupsTable>
    </LayoutContainer>
  )
}