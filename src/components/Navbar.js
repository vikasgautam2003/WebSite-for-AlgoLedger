"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1.8rem 6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)"
      }}
    >
      <div
        style={{
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          opacity: 0.85
        }}
      >
        AlgoLedger
      </div>

      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase"
        }}
      >
        <a href="#features" style={{ opacity: 0.8 }}>
          Features
        </a>
        <a href="#download" style={{ opacity: 0.8 }}>
          Download
        </a>
      </div>
    </motion.nav>
  );
}
