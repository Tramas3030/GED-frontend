import { useLocation } from "react-router-dom"

import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"

export function RegisterAndLoginDefaultLayout() {
  const { pathname } = useLocation();
  
  const buttonText = pathname === "/login" ? "Login" : "Register";

  return(
    <Container>
      <h1>GED System</h1>

      <FormContainer action="">
        <input type="text" name="" id="" placeholder="Username"/>
        <input type="password" name="" id="" placeholder="Password"/>

        <MediumButton text={buttonText}/>
      </FormContainer>
    </Container>
  )
}