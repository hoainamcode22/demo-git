import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

// Nếu backend của bạn là /api/auth/signup thì đổi path này:
const REGISTER_PATH = "/auth/register";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER", // mặc định – có thể đổi thành OWNER nếu bạn muốn
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      // DTO theo backend của bạn:
      // { name, email, password, role }
      const res = await api.post(REGISTER_PATH, {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role, // Role enum phía BE (CUSTOMER / OWNER / DENTIST / ADMIN)
      });

      // Trường hợp BE trả AuthResponse (có token) => auto-login
      if (res?.data?.token) {
        const { token, name, role } = res.data;
        login(token, { name, email: form.email, role });
        navigate("/"); // về trang chủ
      } else {
        // Trường hợp BE chỉ trả 200 không có token => điều hướng sang login
        navigate("/login");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Đăng ký thất bại. Vui lòng thử lại.";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded mt-8">
      <h1 className="text-2xl font-semibold mb-4">Đăng ký tài khoản</h1>

      {err && <div className="mb-3 text-red-600">{err}</div>}

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Họ tên
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            type="text"
            required
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            required
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            required
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium">
            Vai trò
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={onChange}
            className="mt-1 w-full border rounded px-3 py-2 bg-white"
          >
            {/* Thường cho phép CUSTOMER/OWNER tự đăng ký.
               Nếu muốn cho phép DENTIST, thêm vào đây. ADMIN không nên public. */}
            <option value="CUSTOMER">Customer</option>
            <option value="OWNER">Clinic Owner</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full border rounded py-2 font-medium"
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>
      </form>

      <p className="text-sm mt-4">
        Đã có tài khoản?{" "}
        <Link to="/login" className="underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
