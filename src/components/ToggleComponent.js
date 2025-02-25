import React from "react";
import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [isOn, toggle] = useToggle();

  return (
    <div className="p-5 text-center">
      <h2 className="text-2xl font-bold">{isOn ? "ON" : "OFF"}</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggle}
      >
        Toggle
      </button>
    </div>
  );
}

export default ToggleComponent;
