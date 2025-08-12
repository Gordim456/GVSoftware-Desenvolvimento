import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";

interface CelebrationProps {
  active: boolean;
}

const Celebration: React.FC<CelebrationProps> = ({ active }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!active || typeof window === "undefined") return;

    const duration = 8000; // 8s de celebração com fogos
    const endTime = Date.now() + duration;

    const colors = [
      "#0b1020", // preto azulado do fundo
      "#3b82f6", // azul
      "#8b5cf6", // roxo
      "#a78bfa", // roxo claro
      "#60a5fa", // azul claro
      "#ffffff", // brilho
    ];

    const shoot = () => {
      // estouro central aleatório
      confetti({
        particleCount: 90,
        spread: 70,
        startVelocity: 60,
        ticks: 200,
        gravity: 0.9,
        scalar: 1,
        origin: { x: Math.random() * 0.8 + 0.1, y: Math.random() * 0.4 + 0.1 },
        colors,
      });

      // canhões laterais
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        startVelocity: 45,
        origin: { x: 1 },
        colors,
      });
    };

    // loop enquanto durar a celebração
    const interval = window.setInterval(() => {
      if (Date.now() > endTime) return;
      shoot();
    }, 700);

    // primeiro disparo imediato
    shoot();

    return () => {
      window.clearInterval(interval);
      confetti.reset();
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      {/* Confete contínuo enquanto ativo */}
      <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={220}
        recycle={true}
        gravity={0.35}
        tweenDuration={6000}
        colors={["#0b1020", "#3b82f6", "#8b5cf6", "#a78bfa", "#60a5fa", "#ffffff"]}
        className="animate-fade-in"
      />
    </div>
  );
};

export default Celebration;
