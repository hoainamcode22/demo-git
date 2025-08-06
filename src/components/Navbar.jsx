import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  // const { token, role, logout } = useAuth();

  const linkBase =
    "px-3 py-2 rounded hover:bg-gray-100 transition-colors";
  const linkActive = "text-blue-600 font-semibold";
  const linkInactive = "text-gray-700";

  // Handler đăng xuất (nếu bạn đã có auth)
  const handleLogout = () => {
    // logout?.();
    // Xoá token localStorage nếu đang lưu:
    // localStorage.removeItem("token");
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
            end
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/create-clinic"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Tạo phòng khám
          </NavLink>

          <NavLink
            to="/pending-clinics"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Chờ duyệt
          </NavLink>
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-2">
          {/* Nếu đã có token thì hiện nút Đăng xuất; chưa có thì Login/Register */}
          {/* {token ? (
            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded bg-gray-800 text-white hover:opacity-90"
            >
              Đăng xuất
            </button>
          ) : ( */}
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
          {/* )} */}
        </div>
      </div>
    </nav>
  );
}
