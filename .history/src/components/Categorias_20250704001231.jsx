import React from "react";

export default function Categorias() {
  return (
    <div className="flex flex-wrap md:items-center md:justify-center md:gap-5 mt-8">
      <button className="md:w-24 md:h-8 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded hover:bg-[#072c5c]">
        Mountain
      </button>
      <button className="md:w-24 md:h-8 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded hover:bg-[#072c5c]">
        Beaches
      </button>
      <button className="md:w-24 md:h-8 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded hover:bg-[#072c5c]">
        Birds
      </button>
      <button className="md:w-24 md:h-8 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded hover:bg-[#072c5c]">
        Food
      </button>
    </div>
  );
}
