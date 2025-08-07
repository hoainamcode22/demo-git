import { useState } from "react";
import "../assets/css/login.css";
import doctorImg from "../assets/images/doctor.jpg";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email: username,
        password: password,
      });

      const { token, role } = res.data;

      // Lưu token và role vào localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Điều hướng đến dashboard tương ứng
      if (role === "ADMIN") {
        navigate("/pending-clinics");
      } else if (role === "CLINIC_OWNER") {
        navigate("/create-clinic");
      } else {
        alert("Vai trò chưa được hỗ trợ ở bước này.");
        navigate("/");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Đăng nhập thất bại. Kiểm tra email hoặc mật khẩu.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="image-section">
          <img src={doctorImg} alt="Doctor" />
        </div>

        <div className="form-section">
          <h2>Chào mừng đến phòng khám đa khoa</h2>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Đăng nhập</button>
          </form>

          <div className="form-links">
            <Link to="#">Quên mật khẩu?</Link> | <Link to="/register">Tạo tài khoản mới</Link>
          </div>

          <div className="contact-info">
            <p>
              Hotline: <strong>0326040037</strong>
            </p>
            <p>
              Email: <strong>uthdakhoa@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
