import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Categorias from "./Categorias";

export default function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);

  async function fetchData() {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      console.log(data);
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    }
  }
}
