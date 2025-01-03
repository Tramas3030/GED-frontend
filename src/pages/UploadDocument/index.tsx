import { useForm } from "react-hook-form";

import { MediumButton } from "../../components/MediumButton";
import { CustomFileInput } from "./components/CustomFileInput";
import { CategoryInputContainer, FormContainer } from "./styles";

interface UploadFormInputs {
  fileInput: FileList;
  category: string;
  tag: string;
  description: string;
};

export function UploadDocument() {
  const { register, handleSubmit, reset } = useForm<UploadFormInputs>();

  function handleFormSubmit(data: UploadFormInputs) {
    console.log(data);
    reset();
  }
  
  return(
    <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <CustomFileInput id="fileInput" {...register('fileInput')}/>
        <CategoryInputContainer type="text" placeholder="Category" id="category" {...register('category')}/>
      </div>

      <input type="text" placeholder="Add tags separeted by commas" id="tag" {...register('tag')}/>
      <input type="text" placeholder="Description" id="description" {...register('description')}/>

      <MediumButton text="Upload document"/>
    </FormContainer>
  )
}