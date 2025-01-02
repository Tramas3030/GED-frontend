import * as Dialog from "@radix-ui/react-dialog";
import { Content, DialogButtonsContainer, Overlay } from "./styles";

export function UploadDocumentModal() {
  return(
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Description>
          <p> Are you sure you want to <span>delete</span> this document? 
          This action is <span>permanent</span> and can't be <span>undone</span> </p>
        </Dialog.Description>

        <DialogButtonsContainer>
          <button>Cancel</button>
          <button>Delete</button>
        </DialogButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}