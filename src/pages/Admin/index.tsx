import { Users } from "phosphor-react";

import { LayoutContainer, PendingRequestsContainer, PendingRequestsCounterContainer, RequestsContainer } from "./styles";
import { RequestCard } from "./components/RequestCard";

const requests = [
  { id: 1, name: "João Dantas", email: "joaodantas@gmail.com" },
  { id: 2, name: "Maria Silva", email: "mariasilva@gmail.com" },
  { id: 3, name: "Pedro Alves", email: "pedroalves@gmail.com" },
];

export function Admin() {
  return(
    <LayoutContainer>
      <PendingRequestsContainer>
        <div>
          <Users size={24}/>
          <span className="pendingRequests">Pending requests</span>
        </div>
        
        <PendingRequestsCounterContainer>3 pendentes</PendingRequestsCounterContainer>
      </PendingRequestsContainer>
      
      <RequestsContainer>
        {requests.map((request, index) => (
          <RequestCard key={request.id} hasBorder={index !== requests.length - 1} />
        ))}
      </RequestsContainer>
    </LayoutContainer>
  )
}