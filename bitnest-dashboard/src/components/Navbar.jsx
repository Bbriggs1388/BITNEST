import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Bitnest" className="h-8 w-8" />
          <span className="text-white font-extrabold text-xl tracking-wide">Bitnest</span>
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="text-white hover:text-yellow-400 font-semibold transition">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/login" className="text-yellow-400 hover:text-white font-semibold transition">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
