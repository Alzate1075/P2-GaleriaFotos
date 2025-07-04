import React, { useState } from "react";

export default function SearchGallery() = useState([]) {
  const [buscarT, setBuscarT] = useState("");
  return (
    <div className="font-sans text-gray-500 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        className="border-3 border-gray-300 bg-gray-100 rounded-l px-4 py-2 w-xs md:w-[400px] focus:outline-none"
        onChange={(e) => {
          setImput(e.target.value), setFotoTitle(e.target.value);
        }}
      />
      <button className="cursor-pointer bg-gray-100 text-white px-4 py-2 rounded-r hover:bg-[#051b37]">
        <img src="/search-icon.svg" alt="Buscador" />
      </button>
    </div>
  );
}
