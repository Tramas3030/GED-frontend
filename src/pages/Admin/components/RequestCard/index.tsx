import { useAuth } from "../../../../contexts/AuthContext";
import { apiGateway } from "../../../../lib/axios";
import { ProfileRequestCard } from "../ProfileRequestCard";
import { AcceptOrDenyButtonsDivContainer, ButtonsContainer, RequestCardContainer } from "./styles";

interface RequestCardProps {
  hasBorder: boolean;
  requestId: string;
  idCompany: string;
  handleRequestUpdate: (requestId: string) => void;
}

export function RequestCard({ hasBorder, requestId, idCompany, handleRequestUpdate }: RequestCardProps) {
  const { token } = useAuth();

  async function handleAcceptRequest() {
    try {
      await apiGateway.patch(`/v1/api/companymembership/${requestId}?newStatus=aceita`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      handleRequestUpdate(requestId);
    } catch (error) {
      console.log("Error accepting request: ", error);
    }
  }

  async function handleDenyRequest() {
    try {
      await apiGateway.patch(`/v1/api/companymembership/${requestId}?newStatus=recusa`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      handleRequestUpdate(requestId);
    } catch (error) {
      console.log("Error denying request: ", error);
    }
  }

  return(
    <RequestCardContainer hasBorder={hasBorder}>
      <ProfileRequestCard 
        idCompany={idCompany}
        requestId={requestId}
      />

      <AcceptOrDenyButtonsDivContainer>
        <ButtonsContainer onClick={handleAcceptRequest}>Accept</ButtonsContainer>
        <ButtonsContainer onClick={handleDenyRequest}>Deny</ButtonsContainer>
      </AcceptOrDenyButtonsDivContainer>
    </RequestCardContainer>
  )
}