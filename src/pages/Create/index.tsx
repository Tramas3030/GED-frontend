import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormInput } from "../../components/FormInput";
import { MediumButton } from "../../components/MediumButton";
import { FormContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { apiGateway } from "../../lib/axios";

const formValidationSchema = zod.object({
  companyName: zod.string().min(3, "Username must be at least 3 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Create() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { register, handleSubmit, reset } = useForm<formData>({
      resolver: zodResolver(formValidationSchema),
      defaultValues: {
        companyName: "",
      }
    });

  async function onSubmit(data: formData) {
    try {
      const response = await apiGateway.post("/v1/api/company", {
        name: data.companyName,
        isVisible: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );

      console.log("Company created successfully");
      console.log(response.data);      
      
      reset();
      navigate("/");
    } catch (error) {
      console.log("Error during create company: ", error);
    }
  }
  
  return(
    <FormContainer onSubmit={handleSubmit(onSubmit)} action="">
      <h1>Create a company</h1>
      
      <FormInput 
        inputText="Write the company name"
        labelText="Company name"
        type="text"
        id="companyName"
        {...register('companyName')}
      />
      
      <MediumButton text="Create"/>
    </FormContainer >
  )
}