import { createContext, useContext, useEffect, useState } from "react";
import { Client, Account, OAuthProvider } from "appwrite";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
  const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
  const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
  const account = new Account(client);

  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/login"
    )
      return;

    const checkAuth = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
        setIsAuthenticated(true);
        console.log("User authenticated:", userData);
      } catch (error) {
        window.location.replace("/");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [loading]);

  const handleGoogleLogin = () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "https://100devs-freelance.netlify.app/dashboard",
      "https://100devs-freelance.netlify.app",
      []
    );
  };

  const handleLogoutUser = async () => {
    const result = await account.deleteSessions("current");
    if (result) window.location.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{
        handleGoogleLogin,
        handleLogoutUser,
        isAuthenticated,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
}
