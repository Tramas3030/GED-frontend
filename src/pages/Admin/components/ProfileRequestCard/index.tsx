import { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { AvatarContainer, NameAndEmailContainer, ProfileRequestCardContainer } from "./styles";
import { apiGateway } from "../../../../lib/axios";

interface ProfileRequestCardProps {
  idCompany: string;
  requestId: string;
}

interface CompanyRequest {
  id: string;
  requesterUsername: string;
  companyId: string;
  requestDate: string;
  status: string;
}

export function ProfileRequestCard({ idCompany, requestId }: ProfileRequestCardProps) {
  const { token } = useAuth();
  const [currentRequest, setCurrentRequest] = useState<CompanyRequest | null>(null);

  useEffect(() => {
    const getCompanyRequests = async () => {
      try {
        const response = await apiGateway.get(`/v1/api/companymembership/${idCompany}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const request = response.data.find((req: CompanyRequest) => req.id === requestId);
        if(request) {
          setCurrentRequest(request);
        }

      }
      catch (error) {
        console.log("Error fetching company requests: ", error);
      }
    }

    getCompanyRequests();
  }, [token, idCompany, requestId]);

  const getInitials = (username: string) => {
    const initials = username.split("@")[0];
    return initials.slice(0, 2).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  if(!currentRequest) {
    return null;
  }

  return(
    <ProfileRequestCardContainer>
      <AvatarContainer>
        <p>
          {getInitials(currentRequest.requesterUsername)}
        </p>
      </AvatarContainer>

      <NameAndEmailContainer>
        <span className="Username">
          {currentRequest.requesterUsername}
        </span>
        
        <span>
          Data da requisição: {formatDate(currentRequest.requestDate)}
        </span>
      </NameAndEmailContainer>
    </ProfileRequestCardContainer>
  )
}