import React from "react";

export default function Categorias() {
  return (
    <div className="cursor-pointer flex flex-wrap md:items-center md:justify-center md:gap-5 mt-8">
      <button className="md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Mountain
      </button>
      <button className="md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Beaches
      </button>
      <button className="md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Birds
      </button>
      <button className="md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Food
      </button>
    </div>
  );
}
