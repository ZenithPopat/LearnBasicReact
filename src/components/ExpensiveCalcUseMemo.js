import { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Expensive calculation
  const slowFunction = (num) => {
    console.log("Computing...");
    for (let i = 0; i < 2000000000; i++) {} // Simulating delay
    return num * 2;
  };

  // Memoize result
  const doubleCount = useMemo(() => slowFunction(count), [count]);

  return (
    <div style={{ background: darkMode ? "black" : "white", color: darkMode ? "white" : "black", padding: "20px" }}>
      <h2>Count: {count}</h2>
      <h3>Double: {doubleCount}</h3>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setDarkMode(!darkMode)}>🌙 Toggle Dark Mode</button>
    </div>
  );
};

export default ExpensiveComponent;
