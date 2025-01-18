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

interface Document {
  documentId: string;
  documentName: string;
  description: string;
  category: string;
}

export function Group() {
  const navigate = useNavigate();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const { token } = useAuth();
  const [userPermissions, setUserPermissions] = useState<string[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  
  const decodedToken = jwtDecode<TokenPayload>(token!);
  const userEmail = decodedToken.sub;
 
  useEffect(() => {
    const getDocuments = async () => {
      try {
        const response = await apiGateway.get(`/v1/api/metadata/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setDocuments(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching documents: ", error);
      }
    };

    getDocuments();
  }, [token, companyId]);

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

  function handleTableGroupClick(documentId: string) {
    navigate("/document/details", { 
      state: { 
        companyId,
        documentId
      } 
    });
  }

  function handleUploadDocumentButtonClick() {
    navigate("/document/upload", { state: { companyId }});
  }

  function handleSeeMembersRequestsButtonClick() {
    navigate("/group/admin", { state: { companyId } });
  }

  function handleMembersPermissionsButtonClick() {
    navigate("/group/admin/roles" , { state: { companyId } });
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
          <tbody>
            {documents.map((document) => (
              <tr 
                key={document.documentId}
                onClick={() => handleTableGroupClick(document.documentId)}
              >
                <td>{document.documentName}</td>
                <td className="textPreview">{document.description}</td>
                <td>
                  <Tag text={document.category || "No category"}/>
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
            ))}
          </tbody>
        </GroupsTable>
    </LayoutContainer>
  )
}