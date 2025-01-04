import { Users } from "phosphor-react";

import { LayoutContainer, PendingRequestsContainer, PendingRequestsCounterContainer, RequestsContainer } from "./styles";

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
        
      </RequestsContainer>
    </LayoutContainer>
  )
}