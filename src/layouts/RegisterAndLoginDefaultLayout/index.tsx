import { useLocation } from "react-router-dom"
import { useForm } from "react-hook-form";

import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"

export function RegisterAndLoginDefaultLayout() {
  const { pathname } = useLocation();
  const { register, handleSubmit } = useForm();
  
  const buttonText = pathname === "/login" ? "Login" : "Register";

  function onSubmit(data: any) {
    console.log(data);
  }

  return(
    <Container>
      <h1>GED System</h1>

      <FormContainer onSubmit={handleSubmit(onSubmit)} action="">
        <label htmlFor="username" className="sr-only">Username</label>
        <input type="text" id="username" placeholder="Username" {...register('username')}/>
        
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" id="password" placeholder="Password" {...register('password')}/>

        <MediumButton text={buttonText}/>
      </FormContainer>
    </Container>
  )
}