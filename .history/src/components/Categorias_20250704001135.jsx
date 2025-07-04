import React from "react";

export default function Categorias() {
  return (
    <div className="flex flex-wrap md:items-center md:justify-center md:gap-5 mt-8">
      <button className="w-24 h-8 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded hover:bg-[#072c5c]">
        Mountain
      </button>
      <button className="md:w-25 md:h-6 font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Beaches
      </button>
      <button className="md:w-25 md:h-6 font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Birds
      </button>
      <button className="md:w-25 md:h-6 font-sans bg-[#051b37] text-white px-4 py-2 rounded">
        Food
      </button>
    </div>
  );
}
