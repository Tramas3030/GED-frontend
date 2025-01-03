import { MediumButton } from "../../components/MediumButton";
import { CustomFileInput } from "./components/CustomFileInput";
import { CategoryInputContainer, FormContainer } from "./styles";

export function UploadDocument() {
  return(
    <FormContainer>
      <div>
        <CustomFileInput />
        <CategoryInputContainer type="text" placeholder="Category" required/>
      </div>

      <input type="text" placeholder="Add tags separeted by commas"/>
      <input type="text" placeholder="Description"/>

      <MediumButton text="Upload document"/>
    </FormContainer>
  )
}