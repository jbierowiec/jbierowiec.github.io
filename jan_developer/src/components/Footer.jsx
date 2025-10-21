import React from "react";
export default function Footer() {
  return (
    <footer
      className="border-t border-black/10 bg-white py-8 text-center text-slate-600 dark:border-white/10 dark:bg-[#0b1120] dark:text-white/60 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p>
          © {new Date().getFullYear()} Jan Bierowiec — Built with React,
          @react-three/fiber, and p5.js
        </p>
      </div>
    </footer>
  );
}
