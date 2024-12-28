import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"

const formValidationSchema = zod.object({
  username: zod.string().min(3, "Username must be at least 3 characters long"),
  password: zod.string().min(5, "Password must be at least 5 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Register() {
  const { register, handleSubmit, reset } = useForm<formData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  });

  function onSubmit(data: formData) {
    console.log(data);
    reset();
  }

  return(
    <Container>
      <h1>GED System</h1>

      <FormContainer onSubmit={handleSubmit(onSubmit)} action="">
        <label htmlFor="username" className="sr-only">Username</label>
        <input type="text" id="username" placeholder="Username" {...register('username')}/>
        
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" id="password" placeholder="Password" {...register('password')}/>

        <MediumButton text="Register"/>
      </FormContainer>
    </Container>
  )
}