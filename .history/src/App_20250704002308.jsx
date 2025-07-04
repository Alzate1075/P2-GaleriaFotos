import React, { useState } from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";
import Categorias from "./components/Categorias";

export default function App() {
  const [titulo, setTitulo] = useState("Welcome");
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <SearchGallery setTitulo={setTitulo} />
      <Categorias setTitulo={setTitulo} />
      <h2 className="text-2xl font-semibold text-[#051b37] mt-6">{titulo}</h2>
    </div>
  );
}
