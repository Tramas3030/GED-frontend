import * as Dialog from "@radix-ui/react-dialog";
import { CancelButton, CloseButton, Content, DeleteButton, DialogButtonsContainer, Overlay } from "./styles";
import { X } from "phosphor-react";

export function UploadDocumentModal() {
  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={16}/>
        </CloseButton>

        <Dialog.Description>
          <p> Are you sure you want to <span>delete</span> this document? 
          This action is <span>permanent</span> and can't be <span>undone</span> </p>
        </Dialog.Description>

        <DialogButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          <DeleteButton>Delete</DeleteButton>
        </DialogButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}