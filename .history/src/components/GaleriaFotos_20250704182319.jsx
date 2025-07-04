import React from "react";
import React, { useEffect, useState } from "react";

export default function GaleriaFotos() {
  return (
    <div className="w-[70%] md:w-full md:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {fotos.map((foto) => (
        <img
          key={foto.id}
          src={foto.src.medium}
          alt={foto.alt}
          className="rounded shadow-lg w-full h-48 md:h-40 object-cover"
        />
      ))}
    </div>
  );
}
