import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {    // updates the size state whenever the window resizes
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);    // listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, []);   // empty array ensures that the effect runs only once

  return size;
};

export default useWindowSize;
