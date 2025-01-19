import { useLocation } from "react-router-dom";
import { Tag } from "./components/Tag";
import { Container, TagsContainer, TitleAndDownloadButtonContainer, UpdatedAndCreatedByContainer } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { apiGateway } from "../../lib/axios";
import { DownloadSimple } from "phosphor-react";

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

  async function handleDownloadDocument() {
    try {
      const response = await apiGateway.get("/v1/api/documents/download", {
        params: {
          companyId: companyId,
          documentName: documentDetails?.documentName
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", documentDetails?.documentName || "document.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error downloading document: ", error);
    }
  }

  return(
    <Container>
      <TitleAndDownloadButtonContainer>
        <h1>{documentDetails?.documentName}</h1>
        <DownloadSimple size={24} onClick={handleDownloadDocument} />
      </TitleAndDownloadButtonContainer>
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