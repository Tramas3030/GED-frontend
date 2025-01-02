import { Tag } from "./components/Tag";
import { Container, TagsContainer, UpdatedAndCreatedByContainer } from "./styles";

export function DocumentDetails() {
  return(
    <Container>
      <h1>Document 1.pdf</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint debitis possimus officiis, ipsa mollitia beatae explicabo libero quisquam voluptas quae, magnam dolor. Earum aliquam nobis molestiae quae. Delectus, ea?</p>
      
      <UpdatedAndCreatedByContainer>
        <span>Uploaded by: Simonesimons@gmail.com</span>
        <span>Created at: 15/09/2023</span>
      </UpdatedAndCreatedByContainer>

      <TagsContainer>
        <Tag text="Tag1"/>
        <Tag text="Tag2"/>
        <Tag text="Tag3"/>
      </TagsContainer>
    </Container>
  )
}