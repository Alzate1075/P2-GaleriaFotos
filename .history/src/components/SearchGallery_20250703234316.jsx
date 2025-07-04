import React from "react";

export default function SearchGallery() {
  return (
    <div className="font-sans text-gray-400 flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        className="border-3 border-gray-300 bg-gray-100 rounded-l px-4 py-2 w-[60%] focus:outline-none"
      />
      <button className="cursor-pointer bg-gray-100 text-white px-4 py-3 rounded-r hover:bg-[#051b37]">
        🔍
      </button>
    </div>
  );
}
