import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GaleriaFotos() {
  const [fotos, setFotos] = useState([]);

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
    <div className="items-center justify-center grid grid-cols-1 md:grid-cols-4 gap-4 p-4 object-cover">
      {fotos.map((foto) => (
        <img
          key={foto.id}
          src={foto.src.medium}
          alt={foto.alt}
          className="rounded shadow-lg"
        />
      ))}
    </div>
  );
}
