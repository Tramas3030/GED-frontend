import { UploadSimple } from "phosphor-react";
import { FileInputContainer, HiddenFileInput, PlaceholderText, StyledLabel } from "./styles";

export function CustomFileInput() {
  return(
    <FileInputContainer>
      <StyledLabel htmlFor="fileInput">
        <PlaceholderText>Choose file</PlaceholderText>
        <UploadSimple size={24}/>
      </StyledLabel>

      <HiddenFileInput type="file" id="fileInput" required/>
    </FileInputContainer>
  )
}