import React, { useState, useRef, useEffect } from "react";

import PetalAnimation from "@components/PetalAnimation";
const Temp = () => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const TOTAL = 100;

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: TOTAL }).map((_, i) => (
        <PetalAnimation
          key={i}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        />
      ))}
    </div>
  );
};

export default Temp;
