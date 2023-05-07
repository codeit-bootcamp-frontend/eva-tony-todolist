import React, { useState, useRef, useEffect } from "react";
import PetalImg from "@assets/petal.png";
// 벚꽃 잎 컴포넌트
function PetalAnimation({ canvasWidth, canvasHeight }) {
  const petalRef = useRef(null);

  // 벚꽃 잎의 상태를 관리합니다.
  const x = useRef(Math.random() * canvasWidth);
  const y = useRef(Math.random() * canvasHeight * 2 - canvasHeight);
  const w = useRef(30 + Math.random() * 15);
  const h = useRef(20 + Math.random() * 10);
  const opacity = useRef(w.current / 45);
  const xSpeed = useRef(2 + Math.random());
  const ySpeed = useRef(1 + Math.random() * 0.5);
  const flip = useRef(Math.random());
  const flipSpeed = useRef(Math.random() * 0.03);

  useEffect(() => {
    const ctx = petalRef.current.getContext("2d");
    const petalImg = new Image();
    petalImg.src = PetalImg;
    petalImg.onload = () => {
      // 애니메이션을 위한 각 벚꽃 잎 인스턴스를 생성합니다.
      const render = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        x.current += xSpeed.current;
        y.current += ySpeed.current;
        flip.current += flipSpeed.current;
        if (y.current > canvasHeight || x.current > canvasWidth) {
          x.current = -petalImg.width;
          y.current = Math.random() * canvasHeight * 2 - canvasHeight;
          xSpeed.current = 2 + Math.random();
          ySpeed.current = 1 + Math.random() * 0.5;
          flip.current = Math.random();
        }
        ctx.globalAlpha = opacity.current;
        ctx.drawImage(
          petalImg,
          x.current,
          y.current,
          w.current * (0.33 + Math.abs(Math.cos(flip.current)) / 3),
          h.current * (0.4 + Math.abs(Math.sin(flip.current)) / 2)
        );
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };
  }, [canvasHeight, canvasWidth]);

  return (
    <canvas
      ref={petalRef}
      width={canvasWidth}
      height={canvasHeight}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
}

export default PetalAnimation;
