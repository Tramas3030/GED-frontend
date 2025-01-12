import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};