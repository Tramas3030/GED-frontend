import { Profile } from "../Profile";
import { SmallButton } from "../SmallButton";
import { HeaderContainer, HeaderActions } from "./styles";

interface HeaderProps {
  showJoinButton: boolean;
  showCreateButton: boolean;
  showProfile: boolean;
}

export function Header({ showJoinButton, showCreateButton, showProfile }: HeaderProps) {
  return(
    <HeaderContainer>
      <h1>GED System</h1>

      <HeaderActions>
        {showJoinButton && <SmallButton />}
        {showCreateButton && <SmallButton />}
        {showProfile && <Profile />}
      </HeaderActions>
    </HeaderContainer>
  )
}