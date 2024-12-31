import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormInput } from "../../components/FormInput";
import { MediumButton } from "../../components/MediumButton";
import { FormContainer } from "./styles";

const formValidationSchema = zod.object({
  joinCompanyName: zod.string().min(3, "Username must be at least 3 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Join() {
  const { register, handleSubmit, reset } = useForm<formData>({
      resolver: zodResolver(formValidationSchema),
      defaultValues: {
        joinCompanyName: "",
      }
    });
  
    function onSubmit(data: formData) {
      console.log(data);
      reset();
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