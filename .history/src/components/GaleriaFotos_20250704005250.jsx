import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div>
      useEffect(() =>{" "}
      {
        // Aquí va axios.get() para traer las fotos
      }
      , []);
    </div>
  );
}
