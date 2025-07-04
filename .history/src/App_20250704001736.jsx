import React from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";
import Categorias from "./components/Categorias";

export default function App() {
  const [titulo, setTitulo] = useState("Welcome");
  return (
    <div className="min-h-screen">
      <Header />
      <SearchGallery />
      <Categorias />
    </div>
  );
}
