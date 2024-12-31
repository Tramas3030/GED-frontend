import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { FormInput } from "../../components/FormInput";
import { MediumButton } from "../../components/MediumButton";
import { FormContainer } from "./styles";

const formValidationSchema = zod.object({
  companyName: zod.string().min(3, "Username must be at least 3 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Create() {
  const { register, handleSubmit, reset } = useForm<formData>({
      resolver: zodResolver(formValidationSchema),
      defaultValues: {
        companyName: "",
      }
    });
  
    function onSubmit(data: formData) {
      console.log(data);
      reset();
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