import React from "react";

export default function Categorias({ setTitulo, buscarFotos }) {
  const Categorias = ["Mountain", "Beaches", "Birds", "Food"];

  return (
    <div className="w-3xl flex md:items-center md:justify-center md:gap-5 mt-8">
      {Categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => {
            setTitulo(`${categoria} Pictures`);
            buscarFotos(categoria.toLowerCase());
          }}
          className="md:w-25 md:h-6 font-sans font-semibold bg-[#051b37] text-white px-4 py-2 rounded"
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
