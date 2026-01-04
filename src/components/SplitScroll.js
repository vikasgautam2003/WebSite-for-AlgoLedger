"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SplitScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} style={{ height: "200vh" }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 6vw",
          background: "#fff",
          color: "#000",
          x
        }}
      >
        <h2
          style={{
            fontSize: "clamp(3rem, 8vw, 9rem)",
            lineHeight: "0.95",
            fontWeight: 500
          }}
        >
          Built for
          <br />
          engineers who
          <br />
          value control.
        </h2>
      </motion.div>
    </section>
  );
}
