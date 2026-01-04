"use client";

import { motion } from "framer-motion";

export default function Download() {
  return (
    <section
      id="download"
      style={{
        padding: "16rem 6vw",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div style={{ maxWidth: "900px" }}>
        {/* SECTION LABEL */}
        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: "2.5rem"
          }}
        >
          Distribution
        </div>

        {/* TITLE */}
        <h3
          style={{
            fontSize: "3.4rem",
            letterSpacing: "-0.02em",
            marginBottom: "2rem"
          }}
        >
          Download AlgoLedger
        </h3>

        {/* DESCRIPTION */}
        <p
          style={{
            maxWidth: "560px",
            fontSize: "1.05rem",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "3.5rem"
          }}
        >
          AlgoLedger is distributed as a native Windows desktop application.
          No browser dependency, no background services, and no online
          requirements. Once installed, it runs entirely on your machine.
        </p>

        {/* META ROW */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "4.5rem"
          }}
        >
          <span>Version 1.0</span>
          <span>Windows</span>
          <span>Offline-first</span>
        </div>

        {/* CTA */}
        <motion.a
          href="/downloads/AlgoLedger.exe"
          whileHover={{
            y: -4,
            backgroundColor: "#fff",
            color: "#000"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.1rem 3rem",
            border: "1px solid rgba(255,255,255,0.9)",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            background: "transparent",
            color: "#fff"
          }}
        >
          <span>Download for Windows</span>

          {/* ARROW — MICRO MOTION */}
          <motion.span
            aria-hidden
            initial={{ x: 0 }}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
