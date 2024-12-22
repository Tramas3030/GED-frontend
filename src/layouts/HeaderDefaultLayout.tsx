import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function HeaderDefaultLayout() {
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}