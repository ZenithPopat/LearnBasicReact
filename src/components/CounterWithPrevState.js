import React, { useState, useRef, useEffect } from "react";

const CounterWithPrevState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null); // Store previous count

  useEffect(() => {
    prevCountRef.current = count; // Update previous count AFTER re-render
  }, [count]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Counter with Previous State</h1>
      <p className="text-lg">Current Count: <b>{count}</b></p>
      <p className="text-lg">Previous Count: <b>{prevCountRef.current}</b></p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterWithPrevState;
