import React from "react";

export default function Categorias({ setTitulo, buscarFotos }) {
  const Categorias = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-centergap-4 md:gap-5 mt-8">
      {Categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => {
            setTitulo(`${categoria} Pictures`);
            buscarFotos(categoria.toLowerCase());
          }}
          className="md:w-25 h-7 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded"
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
