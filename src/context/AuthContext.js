import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

//   const login = (email, password) => {
//     setUser({ email });
//     navigate("/dashboard");
//   };

  const login = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home after logout
  };

//   const logout = () => {
//     setUser(null);
//     navigate("/");
//   };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);