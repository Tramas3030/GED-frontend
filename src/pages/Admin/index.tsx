import { Users } from "phosphor-react";

import { LayoutContainer, PendingRequestsContainer, PendingRequestsCounterContainer, RequestsContainer, ZeroPendingRequestsContainer } from "./styles";
import { RequestCard } from "./components/RequestCard";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { apiGateway } from "../../lib/axios";

interface RequestObject {
  id: string;
  requestUsername: string;
  companyId: string;
  requestDate: string;
  status: string;
}

export function Admin() {
  const { token } = useAuth();
  const location = useLocation();
  const companyId = location.state?.companyId;
  const [requests, setRequests] = useState<RequestObject[]>([]);

  useEffect (() => {
    const getRequests = async () => {
      try {
        const response = await apiGateway.get(`/v1/api/companymembership/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setRequests(response.data);
      }
      catch (error) {
        console.log("Error fetching requests: ", error);
      }
    }

    getRequests();
  }, [token, companyId]);

  function handleRequestUpdate(requesId: string) {
    setRequests(oldRequestsList => oldRequestsList.filter((request) => request.id !== requesId));
  }

  const pendingRequestsCounter = requests.filter((request) => request.status === "Pendente").length;

  return(
    <LayoutContainer>
      <PendingRequestsContainer>
        <div>
          <Users size={24}/>
          <span className="pendingRequests">Pending requests</span>
        </div>
        
        <PendingRequestsCounterContainer>
          {pendingRequestsCounter} pending {pendingRequestsCounter === 1 ? "request" : "requests"}
        </PendingRequestsCounterContainer>
      </PendingRequestsContainer>
      
      <RequestsContainer>
        {pendingRequestsCounter > 0 ? (
          requests.filter((request) => request.status === "Pendente").map((request, index, filteredRequestsArray) => (
            <RequestCard 
              key={request.id} 
              hasBorder={index !== filteredRequestsArray.length - 1}
              requestId={request.id}
              idCompany={companyId}
              handleRequestUpdate={handleRequestUpdate}
              {...request}
            />
          ))
        ) : (
          <ZeroPendingRequestsContainer>
            <Users size={48}/>
            <strong>No pending requests</strong>
            <p>When someone requests access to your company, it will appear here.</p>
          </ZeroPendingRequestsContainer>
        )}
      </RequestsContainer>
    </LayoutContainer>
  )
}