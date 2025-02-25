import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // Declare State
  const handleCount = () => {
      setCount(count+1);  // Update State
    }
  
  return (
    <div>
      <h1>React Event Handling</h1>
      <p>Button clicked: {count} times</p>
      <button onClick={handleCount}>Click Me</button>
    </div>
  );
}

export default Counter;