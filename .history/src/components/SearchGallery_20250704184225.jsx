import React from "react";

export default function SearchGallery({ buscarT, setBuscarT, buscarFotos }) {
  return (
    <div className="font-sans text-gray-500 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        value={buscarT}
        onChange={(e) => setBuscarT(e.target.value)}
        className="border-3 border-gray-300 bg-gray-100 rounded-l px-4 py-2 w-2xs md:w-[400px] focus:outline-none"
      />

      <button
        onClick={buscarFotos}
        className="cursor-pointer border-gray-100 bg-gray-100 text-white px-4 py-2 rounded-r hover:bg-[#051b37]"
      >
        <img src="/search-icon.svg" alt="Buscador" />
      </button>
    </div>
  );
}
