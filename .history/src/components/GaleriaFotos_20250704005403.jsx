import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Categorias from "./Categorias";

export default function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [Categorias]);

  return <div></div>;
}
