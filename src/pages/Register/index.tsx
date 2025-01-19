import { apiGateway } from "../../lib/axios";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { User, LockSimple } from "phosphor-react";

import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"
import { FormInput } from "../../components/FormInput";
import { Link } from "react-router-dom";

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

  async function onSubmit(data: formData) {
    try {
      const response = await apiGateway.post("/auth/register", {
        username: data.username,
        password: data.password
      });

      console.log("Response:");
      console.log(response.data);

      reset();
    } catch(error) {
      console.log("Error during registration: ", error);
    }
  }

  return(
    <Container>
      <h1>GED System</h1>

      <FormContainer onSubmit={handleSubmit(onSubmit)} action="">
        <FormInput 
          labelText="Username"
          inputText="Enter your username"
          icon={User}
          type="text"
          id="username"
          {...register('username')}
        />

        <FormInput 
          labelText="Password"
          inputText="Enter your password"
          icon={LockSimple}
          type="password"
          id="password"
          {...register('password')}
        />

        <MediumButton text="Register"/>
      </FormContainer>

      <span>Already have an account? <Link to="/">Sign in</Link> </span>
    </Container>
  )
}