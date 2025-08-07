import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });

  // ✅ Đăng nhập bằng API thật
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error("Đăng nhập thất bại");
      }

      const data = await response.json();

      // Lưu token + user info
      setToken(data.token);
      const userInfo = {
        name: data.name,
        role: data.role,
        email: email
      };
      setUser(userInfo);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(userInfo));
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      throw error; // để component gọi login xử lý tiếp
    }
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
