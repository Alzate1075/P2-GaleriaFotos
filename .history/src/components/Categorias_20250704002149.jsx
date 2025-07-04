import React from "react";

export default function Categorias({ setTitulo }) {
  return (
    <div className="flex flex-wrap md:items-center md:justify-center md:gap-5 mt-8">
      <button
        onClick={() => setTitulo("Mountain")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Mountain
      </button>
      <button
        onClick={() => setTitulo("Mountain")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Beaches
      </button>
      <button className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Birds
      </button>
      <button className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded ">
        Food
      </button>
    </div>
  );
}
