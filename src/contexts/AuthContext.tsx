import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isLoggedIn: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("@GEDSystem:token");
  });

  useEffect(() => {
    const handleTabClose = () => {
      localStorage.removeItem("@GEDSystem:token");
    }

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("@GEDSystem:token", token);
    setToken(token);
    navigate("/home");
  };

  const logout = () => {
    localStorage.removeItem("@GEDSystem:token");
    setToken(null);
    navigate("/");
  };

  return(
    <AuthContext.Provider value={{ isLoggedIn: !!token, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}