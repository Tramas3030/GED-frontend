import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CancelButton, CloseButton, Content, DeleteButton, DialogButtonsContainer, Overlay } from "./styles";
import { X } from "phosphor-react";
import { useAuth } from "../../../../contexts/AuthContext";
import { apiGateway } from "../../../../lib/axios";
import { useState } from "react";

interface DeleteDocumentModalProps {
  companyId: string;
  documentName: string;
};

export function DeleteDocumentModal({ companyId, documentName }: DeleteDocumentModalProps) {
  const { token } = useAuth();
  const [isDeleted, setIsDeleted] = useState(false);

  async function handleDeleteDocument() {
    try {
      setIsDeleted(true);

      const formData = new FormData();
      formData.append("companyId", companyId);
      formData.append("documentName", documentName);

      await apiGateway.delete("/v1/api/documents/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: formData,
      });

      window.location.reload();
    } catch (error) {
      console.log("Error deleting document: ", error);
    } finally {
      setIsDeleted(false);
    }
  }
  
  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={16}/>
        </CloseButton>

        <VisuallyHidden.Root>
          <Dialog.Title>Delete document</Dialog.Title>
        </VisuallyHidden.Root>
        <Dialog.Description>
          Are you sure you want to <span>delete</span> this document? 
          This action is <span>permanent</span> and can't be <span>undone</span>
        </Dialog.Description>

        <DialogButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          
          <DeleteButton
            onClick={handleDeleteDocument}
            disabled={isDeleted}
          >
            {isDeleted ? "Deleting..." : "Delete"}
          </DeleteButton>
        </DialogButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}