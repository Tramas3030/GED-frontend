import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../contexts/AuthContext";
import { AvatarContainer, ProfileContainer } from "./styles";

interface TokenPayload {
  sub: string;
}

export function Profile() {
  const { token } = useAuth();

  const decodedToken = jwtDecode<TokenPayload>(token!);
  const userEmail = decodedToken.sub;

  const getInitials = (username: string) => {
    const initials = username.split("@")[0];
    return initials.slice(0, 2).toUpperCase();
  };

  return(
    <ProfileContainer>
      <span>{userEmail}</span>
      
      <AvatarContainer>
        <p>
          {getInitials(userEmail)}
        </p>
      </AvatarContainer>
    </ProfileContainer>
  )
}