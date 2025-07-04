import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Categorias from "./components/Categorias";
import Search from "./components/SearchGallery";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Gallery />
    </div>
  );
}
