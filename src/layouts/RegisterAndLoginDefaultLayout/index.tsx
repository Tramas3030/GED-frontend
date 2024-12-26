import { MediumButton } from "../../components/MediumButton"
import { Container, FormContainer } from "./styles"

export function RegisterAndLoginDefaultLayout() {
  return(
    <Container>
      <FormContainer action="">
        <input type="text" name="" id="" placeholder="Username"/>
        <input type="password" name="" id="" placeholder="Password"/>

        <MediumButton text="Teste"/>
      </FormContainer>
    </Container>
  )
}