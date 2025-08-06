import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClass = "text-blue-600 border-b-2 border-blue-600";
  const inactiveClass = "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="container mx-auto px-4 flex items-center justify-between h-16"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="Phòng Khám Đa Khoa"
            className="h-8 w-8 object-contain"
          />
          <span className="hidden sm:inline">Phòng Khám Đa Khoa</span>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-2 sm:gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Dịch vụ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Đăng nhập
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              Đăng ký
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
