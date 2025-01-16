import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormInput } from "../../components/FormInput";
import { MediumButton } from "../../components/MediumButton";
import { FormContainer } from "./styles";
import { apiGateway } from "../../lib/axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const formValidationSchema = zod.object({
  joinCompanyName: zod.string().min(3, "Company name must be at least 3 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Join() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<formData>({
      resolver: zodResolver(formValidationSchema),
      defaultValues: {
        joinCompanyName: "",
      }
    });
  
  async function onSubmit(data: formData) {
    try {
      const response = await apiGateway.post(`/v1/api/companymembership/${data.joinCompanyName}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      console.log("Request to join company sent successfully");
      console.log(response.data);      
      
      reset();
      navigate("/home");
    } catch (error) {
      console.log("Error during join company: ", error);
    }
  }
  
  return(
    <FormContainer onSubmit={handleSubmit(onSubmit)} action="">
      <h1>Join a company</h1>
      
      <FormInput 
        inputText="Write the company name"
        labelText="Company name"
        type="text"
        id="joinCompanyName"
        {...register('joinCompanyName')}
      />
      
      <MediumButton text="Request"/>
    </FormContainer >
  )
}