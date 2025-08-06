import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });

  const login = (jwt, userInfo) => {
    setToken(jwt);
    setUser(userInfo || null);
    localStorage.setItem("token", jwt);
    if (userInfo) localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = useMemo(
    () => ({ token, user, login, logout, isAuthenticated: !!token }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
