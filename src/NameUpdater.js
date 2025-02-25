import { useState } from "react";

function NameUpdater() {
    const [name, setName] = useState("");  // Declare State
    const handleChange = (event) => {
        setName(event.target.value);  // Update State
      }
    
      return (
        <div>
            <input type="text" placeholder="Type your name here" onChange={handleChange} />
            <p>Hello {name}</p>
        </div>
      );
}

export default NameUpdater;