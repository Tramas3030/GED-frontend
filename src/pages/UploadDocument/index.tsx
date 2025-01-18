import { useForm } from "react-hook-form";

import { MediumButton } from "../../components/MediumButton";
import { CustomFileInput } from "./components/CustomFileInput";
import { CategoryInputContainer, FormContainer } from "./styles";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import { apiGateway } from "../../lib/axios";

interface UploadFormInputs {
  fileInput: FileList;
  category: string;
  tag: string;
  description: string;
};

interface TokenPayload {
  sub: string;
}

export function UploadDocument() {
  const { register, handleSubmit, reset } = useForm<UploadFormInputs>();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const { token } = useAuth();

  const decodedToken = jwtDecode<TokenPayload>(token!);
  const userEmail = decodedToken.sub;

  async function handleFormSubmit(data: UploadFormInputs) {
    try {
      const file = data.fileInput[0];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("companyId", companyId);
      formData.append("username", userEmail);
      formData.append("description", data.description);

      if(data.category) {
        formData.append("category", data.category);
      }

      if(data.tag) {
        const tags = data.tag.split(",").map(tag => tag.trim());
        tags.forEach(tag => {
          formData.append("tags", tag);
        });
      }

      const headerConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      };

      const response = await apiGateway.post("/v1/api/documents/upload", formData, headerConfig);

      console.log(response);
      reset();
    } catch (error) {
      console.log("Error uploading document: ", error);
    }
  }
  
  return(
    <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <CustomFileInput id="fileInput" {...register('fileInput')}/>
        <CategoryInputContainer type="text" placeholder="Category" id="category" {...register('category')}/>
      </div>

      <input type="text" placeholder="Add tags separeted by commas (for example: important, urgent, review)" id="tag" {...register('tag')}/>
      <input type="text" placeholder="Description" id="description" {...register('description')}/>

      <MediumButton text="Upload document"/>
    </FormContainer>
  )
}