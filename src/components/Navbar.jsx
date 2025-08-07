import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // nhớ đúng đường dẫn

export default function Navbar() {
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();

  const linkBase = "px-3 py-2 rounded hover:bg-gray-100 transition-colors";
  const linkActive = "text-blue-600 font-semibold";
  const linkInactive = "text-gray-700";

  const handleLogout = () => {
    logout(); // xoá token, user
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <div
          className="font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Phòng khám
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
          {token && (
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
              end
            >
              Dashboard
            </NavLink>
          )}

          {/* Chỉ hiển thị nếu là OWNER */}
          {user?.role === "CLINIC_OWNER" && (
            <NavLink
              to="/create-clinic"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Tạo phòng khám
            </NavLink>
          )}

          {/* Chỉ hiển thị nếu là ADMIN */}
          {user?.role === "ADMIN" && (
            <NavLink
              to="/pending-clinics"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Chờ duyệt
            </NavLink>
          )}
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-2">
          {token ? (
            <>
              <span className="text-gray-600">
                👤 {user?.name} ({user?.role})
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded bg-gray-800 text-white hover:opacity-90"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-50"
              >
                Đăng nhập
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-3 py-2 rounded bg-blue-600 text-white hover:opacity-90"
              >
                Đăng ký
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
