import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Bitnest. All rights reserved.
      </div>
    </footer>
  );
}
