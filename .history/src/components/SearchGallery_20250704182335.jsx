import React from "react";
import React, { useState } from "react";
export default function SearchGallery() {


  const fotosFil = fotos.filter((foto) =>
    foto.alt.toLowerCase().includes(buscarT.toLowerCase())
  );
}
  return (
    <div className="font-sans text-gray-500 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        value={buscarT}
        onChange={(e) => setBuscarT(e.target.value)}
        className="border-3 border-gray-300 bg-gray-100 rounded-l px-4 py-2 w-xs md:w-[400px] focus:outline-none"
      />

      <button 
      onClick={buscarFotos}
      className="cursor-pointer bg-gray-100 text-white px-4 py-2 rounded-r hover:bg-[#051b37]">
        <img src="/search-icon.svg" alt="Buscador" />
      </button>
    </div>
  );
}
