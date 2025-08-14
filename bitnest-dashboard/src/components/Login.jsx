import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "Nancy$100";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 min-h-[70vh] flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-5"
        autoComplete="off"
      >
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          className="border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoFocus
        />
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        <button type="submit" className="bg-yellow-400 text-blue-900 py-2 rounded font-bold mt-2 hover:bg-yellow-500 transition">
          Login
        </button>
      </form>
    </section>
  );
}
