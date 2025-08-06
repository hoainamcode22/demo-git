import { useState } from "react";
import "../assets/css/login.css";
import doctorImg from "../assets/images/doctor.jpg";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault(); // ngăn reload trang
    // mock login, sẽ gắn API Dev1 sau
    login("demo-token", { username, roles: ["GUEST"] });
    navigate("/");
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
              name="username"
              placeholder="Tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
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
