import { UploadSimple } from "phosphor-react";
import { forwardRef } from "react";
import { FileInputContainer, HiddenFileInput, PlaceholderText, StyledLabel } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CustomFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomFileInput = forwardRef<HTMLInputElement, CustomFileInputProps>((props , ref) => {
    return(
      <FileInputContainer>
        <StyledLabel htmlFor={props.id}>
          <PlaceholderText>Choose file</PlaceholderText>
          <UploadSimple size={24}/>
        </StyledLabel>

        <HiddenFileInput type="file" id="fileInput" required ref={ref} {...props}/>
      </FileInputContainer>
    )
  }
)