import React, { useState } from "react";
import Header from "./components/Header";
import SearchGallery from "./components/SearchGallery";
import Categorias from "./components/Categorias";
import GaleriaFotos from "./components/GaleriaFotos";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [titulo, setTitulo] = useState("Mountain Pictures");
  const [fotos, setFotos] = useState([]);
  const [buscarT, setBuscarT] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { data } = await axios.get(
        `https://api.pexels.com/v1/search?query=mountain&per_page=12`,
        {
          headers: {
            Authorization:
              "WM5W7xLg1COodo3lwvRPmlVaCVpBeosisd5oLmAZSYXkme93CP5uTwv6",
          },
        }
      );
      console.log(data);
      setFotos(data.photos || []);
    } catch (error) {
      console.error(error);
    }
  }

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
