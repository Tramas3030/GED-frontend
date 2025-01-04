import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

interface Routes {
  joinButton: string[],
  createButton: string[],
  profile: string[],
};

const headerRoutes: Routes = {
  joinButton: ['/', '/create'],
  createButton: ['/', '/join'],
  profile: ['/group', '/group/admin', '/document/details', '/document/upload']
};

export function DefaultLayout() {
  const { pathname } = useLocation();

  const shouldShowJoinButton = headerRoutes.joinButton.includes(pathname);
  const shouldShowCreateButton = headerRoutes.createButton.includes(pathname);
  const shouldShowProfile = headerRoutes.profile.includes(pathname);
  
  return(
    <LayoutContainer>
      <Header 
        showJoinButton={shouldShowJoinButton}
        showCreateButton={shouldShowCreateButton}
        showProfile={shouldShowProfile}
      />
      <Outlet />
    </LayoutContainer>
  )
}