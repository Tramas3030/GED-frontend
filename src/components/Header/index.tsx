import { useNavigate } from "react-router-dom";

import { Profile } from "../Profile";
import { SmallButton } from "../SmallButton";
import { HeaderContainer, HeaderActions, HeaderText } from "./styles";

interface HeaderProps {
  showJoinButton: boolean;
  showCreateButton: boolean;
  showProfile: boolean;
}

export function Header({ showJoinButton, showCreateButton, showProfile }: HeaderProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  
  return(
    <HeaderContainer>
      <HeaderText onClick={handleClick}>GED System</HeaderText>

      <HeaderActions>
        {showCreateButton && <SmallButton text="Create"/>}
        {showJoinButton && <SmallButton text="Join"/>}
        {showProfile && <Profile />}
      </HeaderActions>
    </HeaderContainer>
  )
}