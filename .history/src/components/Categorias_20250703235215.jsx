import React from "react";

export default function Categorias() {
  return (
    <div className="flex md:items-center md:justify-center md:gap-5 mt-8">
      <button className="md:w-25 md:h-6 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded">
        Mountain
      </button>
      <button className="md:w-[8%] md:h-6 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded">
        Beaches
      </button>
      <button className="md:w-[8%] md:h-6 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded">
        Birds
      </button>
      <button className="md:w-[8%] md:h-6 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded">
        Food
      </button>
    </div>
  );
}
