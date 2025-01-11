import { AvatarContainer, NameAndEmailContainer, ProfileRequestCardContainer } from "./styles";

export function ProfileRequestCard() {
  return(
    <ProfileRequestCardContainer>
      <AvatarContainer>
        <p>JD</p>
      </AvatarContainer>

      <NameAndEmailContainer>
        <span className="Username">João Dantas</span>
        <span>joaodantas@gmail.com</span>
      </NameAndEmailContainer>
    </ProfileRequestCardContainer>
  )
}