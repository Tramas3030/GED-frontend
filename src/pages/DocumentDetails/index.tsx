import { useLocation } from "react-router-dom";
import { Tag } from "./components/Tag";
import { Container, TagsContainer, UpdatedAndCreatedByContainer } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { apiGateway } from "../../lib/axios";

interface DocumentDetails {
  documentName: string;
  description: string;
  uploadedBy: string;
  createdAt: string;
  tags: string[];
}

export function DocumentDetails() {
  const { token } = useAuth();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const documentId = location.state?.documentId;
  const [documentDetails, setDocumentDetails] = useState<DocumentDetails | null>(null);

  useEffect(() => {
    const getDocumentDetails = async () => {
      try {
        const response = await apiGateway.get(`/v1/api/metadata/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const document = response.data.find((document: any) => document.documentId === documentId);

        if(document) {
          const formattedDate = new Date(document.createdAt).toLocaleDateString("en-US");

          setDocumentDetails({
            documentName: document.documentName,
            description: document.description,
            uploadedBy: document.uploadedBy,
            createdAt: formattedDate,
            tags: document.tags,
          });
        }
      } catch (error) {
        console.log("Error fetching document details: ", error);
      }
    };

    getDocumentDetails();
  }, [token, documentId, companyId]);

  return(
    <Container>
      <h1>{documentDetails?.documentName}</h1>
      <p>{documentDetails?.description}</p>
      
      <UpdatedAndCreatedByContainer>
        <span>Uploaded by: {documentDetails?.uploadedBy}</span>
        <span>Created at: {documentDetails?.createdAt}</span>
      </UpdatedAndCreatedByContainer>

      <TagsContainer>
        {(documentDetails?.tags || []).length > 0 ? (
          (documentDetails?.tags || []).map((tag: string, index: number) => (
            <Tag key={index} text={tag} />
          ))
        ) : (
          <span>No tags</span>
        )}
      </TagsContainer>
    </Container>
  )
}