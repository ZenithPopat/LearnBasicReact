import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-center">
      <h2 className="text-xl font-bold">Window Size</h2>
      <p className="text-lg">Width: {width}px</p>
      <p className="text-lg">Height: {height}px</p>
    </div>
  );
};

export default WindowSizeComponent;