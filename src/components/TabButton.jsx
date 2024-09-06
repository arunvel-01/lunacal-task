import React from "react";

function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`transition-all rounded-2xl font-semibold 
        text-xs sm:text-sm md:text-base lg:text-lg
        px-4 sm:px-6 md:px-8 lg:px-12
        py-2 sm:py-3 md:py-4 lg:py-5
        ${isActive ? "bg-gray-700 text-white" : "bg-black text-white"}`}
    >
      {label}
    </button>
  );
}

export default TabButton;
