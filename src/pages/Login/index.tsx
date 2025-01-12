import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { User, LockSimple } from "phosphor-react";

import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"
import { FormInput } from "../../components/FormInput";
import { apiGateway } from "../../lib/axios";

const formValidationSchema = zod.object({
  username: zod.string().min(3, "Username must be at least 3 characters long"),
  password: zod.string().min(5, "Password must be at least 5 characters long"),
});

type formData = zod.infer<typeof formValidationSchema>;

export function Login() {
  const { register, handleSubmit, reset } = useForm<formData>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  });

  async function onSubmit(data: formData) {
    
    try {
      const response = await apiGateway.post('/auth/login', {
        username: data.username,
        password: data.password
      });

      console.log('Response:');
      console.log(response.data);
    } catch (error) {
      console.log('Error during login: ', error);
    }
    
    console.log(data);
    reset();
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

        <MediumButton text="Login"/>
      </FormContainer>

      <span>Don't have an account yet? <Link to="/register">Sign up</Link> </span>
    </Container>
  )
}

