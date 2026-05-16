"use client";

import { useEffect, useRef } from "react";

const CLOCK_CHARS = [
  "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
  "↑", "↗", "→", "↘", "↓", "↙", "←", "↖",
  "↺", "↻", "⟲", "⟳",
  "◎", "○", "◐", "◑", "◒", "◓",
  "·", "•", "∘",
];

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  chars: string[];
  opacity: number;
}

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT_SIZE = 13;
    const COL_WIDTH = 22;
    let drops: Drop[] = [];
    let animId: number;

    const buildDrops = () => {
      const cols = Math.floor(canvas.width / COL_WIDTH);
      drops = Array.from({ length: cols }, (_, i) => createDrop(i));
    };

    const createDrop = (col: number): Drop => {
      const length = Math.floor(Math.random() * 18) + 6;
      return {
        x: col * COL_WIDTH,
        y: -Math.random() * canvas.height,
        speed: Math.random() * 1.2 + 0.4,
        length,
        chars: Array.from({ length }, () =>
          CLOCK_CHARS[Math.floor(Math.random() * CLOCK_CHARS.length)]
        ),
        opacity: Math.random() * 0.4 + 0.1,
      };
    };

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
      buildDrops();
    };

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const drop of drops) {
        const len = drop.chars.length;

        for (let j = 0; j < len; j++) {
          const py = drop.y - j * FONT_SIZE;
          if (py < -FONT_SIZE || py > canvas.height) continue;

          const ratio = 1 - j / len;

          if (j === 0) {
            // leading char — brightest
            ctx.globalAlpha = drop.opacity * 1.8;
            ctx.fillStyle = "#e0ffe8";
          } else if (j === 1) {
            ctx.globalAlpha = drop.opacity * 1.2;
            ctx.fillStyle = "#7fffaa";
          } else {
            ctx.globalAlpha = drop.opacity * ratio * 0.9;
            ctx.fillStyle = "#00cc55";
          }

          ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;
          ctx.fillText(drop.chars[j], drop.x, py);
        }

        drop.y += drop.speed;

        if (drop.y - drop.chars.length * FONT_SIZE > canvas.height) {
          const col = Math.round(drop.x / COL_WIDTH);
          drops[drops.indexOf(drop)] = { ...createDrop(col), x: drop.x };
        }

        // randomly mutate a char in the stream
        if (Math.random() < 0.03) {
          const idx = Math.floor(Math.random() * drop.chars.length);
          drop.chars[idx] =
            CLOCK_CHARS[Math.floor(Math.random() * CLOCK_CHARS.length)];
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? document.body);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}