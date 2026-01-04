"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Background from "./Background";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        paddingTop: "5 rem",
        
      }}
    >
      {/* CONTENT WRAPPER */}
      <Background />
      <motion.div
        style={{
          scale,
          opacity,
          textAlign: "center",
          maxWidth: "1200px",
          width: "100%",
          padding: "0 4vw",
          marginTop: 250
        }}
      >
        {/* PLATFORM LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.2 rem"
          }}
        >
          Desktop DSA Tracking Platform
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          style={{
            fontSize: "clamp(6.2rem, 11vw, 16rem)",
            fontWeight: 600,
            letterSpacing: "-0.045em",
            lineHeight: "1.3",
            margin: 0
          }}
        >
          AlgoLedger
        </motion.h1>

        {/* SUBLINE */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.6,
            ease: "easeOut"
          }}
          style={{
            marginTop: "2.6rem",
            maxWidth: "680px",
            marginInline: "auto",
            fontSize: "1.05rem",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.65)"
          }}
        >
          A local-first desktop system for tracking Data Structures and Algorithms
          with precision, discipline, and long-term intent.
        </motion.p>
      </motion.div>

      {/* AXIS LINES — REFINED */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "90%",
          height: "1px",
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.04)"
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          height: "90%",
          width: "1px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.04)"
        }}
      />
    </section>
  );
}
