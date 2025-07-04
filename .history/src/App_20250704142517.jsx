import React, { useState } from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";
import Categorias from "./components/Categorias";
import GaleriaFotos from "./components/GaleriaFotos";

export default function App() {
  const [titulo, setTitulo] = useState("Mountain Pictures");
  return (
    <div className="font-poppins bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <SearchGallery setTitulo={setTitulo} />
      <Categorias setTitulo={setTitulo} />
      <h2 className="font-sans text-3xl font-bold text-[#051b37] m-8 md:mt-12">
        {titulo}
      </h2>
      <GaleriaFotos />
    </div>
  );
}
