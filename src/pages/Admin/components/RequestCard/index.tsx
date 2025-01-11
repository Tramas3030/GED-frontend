import { ProfileRequestCard } from "../ProfileRequestCard";
import { AcceptOrDenyButtonsDivContainer, ButtonsContainer, RequestCardContainer } from "./styles";

interface RequestCardProps {
  hasBorder: boolean;
}

export function RequestCard({ hasBorder }: RequestCardProps) {
  return(
    <RequestCardContainer hasBorder={hasBorder}>
      <ProfileRequestCard />

      <AcceptOrDenyButtonsDivContainer>
        <ButtonsContainer>Accept</ButtonsContainer>
        <ButtonsContainer>Deny</ButtonsContainer>
      </AcceptOrDenyButtonsDivContainer>
    </RequestCardContainer>
  )
}