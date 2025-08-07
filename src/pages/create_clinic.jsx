import { useState } from "react";
import axios from "axios";

export default function CreateClinic() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/clinics/create",
        { name, address, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("✅ Tạo phòng khám thành công");
      // Reset form sau khi tạo
      setName("");
      setAddress("");
      setPhone("");
    } catch (err) {
      console.error("❌ Lỗi khi tạo phòng khám:", err);
      alert("Lỗi khi tạo phòng khám. Vui lòng kiểm tra lại.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Tạo Phòng Khám</h2>
      <form onSubmit={handleCreate} className="space-y-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Tên phòng khám"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Tạo phòng khám
        </button>
      </form>
    </div>
  );
}
