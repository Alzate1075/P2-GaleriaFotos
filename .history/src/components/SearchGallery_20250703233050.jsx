import React from "react";

export default function SearchGallery() {
  return (
    <div className="flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="Search..."
        className="border-3 border-gray-300 rounded-l px-4 py-2 w-[60%] focus:outline-none focus:ring-2"
      />
      <button className="bg-blue-900 text-white px-4 rounded-r hover:bg-blue-700">
        🔍
      </button>
    </div>
  );
}
