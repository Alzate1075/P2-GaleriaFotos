import React from "react";

export default function Categorias() {
  return (
    <div className="flex items-center justify-center md:gap-4">
      <button className="font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Mountain
      </button>
      <button className="font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Beaches
      </button>
      <button className="font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Birds
      </button>
      <button className="font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Food
      </button>
    </div>
  );
}
