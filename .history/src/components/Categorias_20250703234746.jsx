import React from "react";

export default function Categorias() {
  return (
    <div className="flex md:items-center md:justify-center md:gap-4 mt-8 py-0 px-4">
      <button className="font-sans font-bold bg-[#051b37] text-white px-4 py-2 rounded">
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
