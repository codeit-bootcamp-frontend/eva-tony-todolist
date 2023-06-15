import  { useState, useEffect } from "react";
import SeasonAnimation from "@components/BackgroundAnimation/SeasonAnimation";

const SeasonBackground = () => {
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
        <SeasonAnimation
          key={i}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
        />
      ))}
    </div>
  );
};

export default SeasonBackground;
