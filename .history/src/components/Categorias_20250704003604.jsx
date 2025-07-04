import React from "react";

export default function Categorias({ setTitulo }) {
  return (
    <div className="flex flex-wrap md:items-center md:justify-center md:gap-5 mt-8">
      <button
        onClick={() => setTitulo("Mountain")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Mountain Picture
      </button>
      <button
        onClick={() => setTitulo("Beaches")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Beaches Picture
      </button>
      <button
        onClick={() => setTitulo("Birds")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Birds Picture
      </button>
      <button
        onClick={() => setTitulo("Food")}
        className="cursor-pointer md:w-24 md:h-7 flex items-center justify-center font-sans font-semibold bg-[#051b37] text-white rounded "
      >
        Food Picture
      </button>
    </div>
  );
}
