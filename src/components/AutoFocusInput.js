import { useRef, useEffect } from "react";
import React from "react";

const AutoFocusInput = () => {  
    const inputRef = useRef(null);  //  Create a ref object for input element
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type here..."
            className="border p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
    );
}

export default AutoFocusInput;