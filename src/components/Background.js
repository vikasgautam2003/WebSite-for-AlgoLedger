"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollYProgress } = useScroll();

  // BIG movements
  const xShift = useTransform(scrollYProgress, [0, 0.5], ["-30%", "30%"]);
  const yShift = useTransform(scrollYProgress, [0, 0.5], ["-20%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-12, 12]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.25, 0.45]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "#000",
        pointerEvents: "none",
        overflow: "hidden"
      }}
    >
      {/* MASSIVE WHITE FORCE */}
      <motion.div
        style={{
          position: "absolute",
          width: "160vmax",
          height: "160vmax",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          x: xShift,
          y: yShift,
          rotate,
          opacity,
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.6) 18%,
              rgba(255,255,255,0.35) 30%,
              rgba(255,255,255,0.15) 45%,
              rgba(255,255,255,0.05) 60%,
              transparent 72%
            )
          `
        }}
      />
    </div>
  );
}
