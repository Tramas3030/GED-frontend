import { UploadSimple } from "phosphor-react";
import { forwardRef, useState } from "react";
import { FileInputContainer, HiddenFileInput, PlaceholderText, StyledLabel } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CustomFileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomFileInput = forwardRef<HTMLInputElement, CustomFileInputProps>((props , ref) => {
  const [fileName, setFileName] = useState<string>("Choose file");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    setFileName(file ? file.name : "Choose file");
  }

  return(
    <FileInputContainer>
      <StyledLabel htmlFor={props.id}>
        <PlaceholderText>{fileName}</PlaceholderText>
        <UploadSimple size={24}/>
      </StyledLabel>

      <HiddenFileInput 
        type="file" 
        id="fileInput" 
        required 
        ref={ref} 
        {...props}
        onChange={(event) => {
          handleFileChange(event);
          props.onChange?.(event);
        }}
      />
    </FileInputContainer>
  ) 
});

