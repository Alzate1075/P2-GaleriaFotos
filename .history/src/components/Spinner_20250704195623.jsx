import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-solid"></div>
    </div>
  );
}
