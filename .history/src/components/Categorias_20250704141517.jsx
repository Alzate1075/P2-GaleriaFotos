import React from "react";

export default function Categorias({ setTitulo }) {
  return (
    <div className="md:flex grid grid-cols-1 md:items-center md:justify-center gap-4 md:gap-5 mt-8">
      <button
        onClick={() => setTitulo("Mountain Pictures")}
        className="cursor-pointer w-95 md:w-24 h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Mountain
      </button>
      <button
        onClick={() => setTitulo("Beaches Pictures")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Beaches
      </button>
      <button
        onClick={() => setTitulo("Birds Pictures")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Birds
      </button>
      <button
        onClick={() => setTitulo("Food Pictures")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Food
      </button>
    </div>
  );
}
