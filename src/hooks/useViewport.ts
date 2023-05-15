import { useState, useEffect } from "react";

// Provider
export const useViewport = () => {
  // States
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // Methods
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // On load
  useEffect(() => {
    if (width === 0 || height === 0) handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, height };
};
