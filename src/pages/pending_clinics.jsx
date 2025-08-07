import { useEffect, useState } from "react";
import axios from "axios";

export default function PendingClinics() {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8080/api/clinics/pending", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClinics(res.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
        alert("Bạn không có quyền hoặc token đã hết hạn");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Danh sách phòng khám chờ duyệt</h2>
      <ul>
        {clinics.map((clinic) => (
          <li key={clinic.id}>{clinic.name}</li>
        ))}
      </ul>
    </div>
  );
}
