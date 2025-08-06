import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import AdminDashboard from "./pages/admin_dashboard.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import GuestHome from "./pages/guest_home.jsx";
import GuestServices from "./pages/guest_services.jsx";
import CreateClinic from "./pages/create_clinic.jsx";
import PendingClinics from "./pages/pending_clinics.jsx";

export default function App() {
  const location = useLocation();

  // Các route public hiển thị Header
  const PUBLIC_PATHS = ["/", "/services", "/login", "/register"];
  const isPublic = PUBLIC_PATHS.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {isPublic ? <Header /> : <Navbar />}

      <div className="p-6 flex-1">
        <Routes>
          {/* Public */}
          <Route path="/" element={<GuestHome />} />
          <Route path="/services" element={<GuestServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Nội bộ */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-clinic" element={<CreateClinic />} />
          <Route path="/pending-clinics" element={<PendingClinics />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
