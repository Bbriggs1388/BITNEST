import React from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem("admin") === "true";

  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  function handleLogout() {
    sessionStorage.removeItem("admin");
    navigate("/");
  }

  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 min-h-[70vh] flex items-center justify-center py-10">
      <div className="bg-white/95 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-6 items-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-3">Bitnest Admin Panel</h2>
        <div className="text-gray-700 font-semibold text-center">
          Welcome, Admin!<br />
          (All sensitive operations remain private and secure.)
        </div>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded mt-6 font-bold hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </section>
  );
}
