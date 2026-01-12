"use client";

import { motion } from "framer-motion";

export default function CosmicBackground() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2
      relative/ w-full h-full flex items-center justify-center overflow-hidden border/ border-red-500"
    >
      {/* Gradient blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#4e47ff] via-[#a855f7] to-[#ec4899] opacity-30 blur-[60px]"
        style={{
          borderRadius: "30.368% 59.7547% 69.5093% 40.368% / 50.1227% 59.632% 30.4907% 59.7547%",
        }}
        initial={{ rotate: 177.792 }}
        animate={{ rotate: 177.792 + 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-[#6366f1] to-[#0ea5e9] opacity-25 blur-[50px] mix-blend-overlay"
        style={{ borderRadius: "50.3588% 49.6412% 49.2824% 50.7176% / 55.5382% 44.8206% 54.8206%" }}
        initial={{ scale: 1.00359, rotate: 93.2294 }}
        animate={{ rotate: 93.2294 - 360, scale: [1, 1.1, 1] }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          initial={{ rotate: 0 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 35 + (i % 5) * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute bg-white rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
            style={{ width: 6, height: 6 }}
            initial={{ x: p.x, y: p.y, scale: p.s, opacity: 0.8 }}
            animate={{ scale: [p.s, p.s * 1.5, p.s], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        </motion.div>
      ))}

      {/* Orbit circles */}
      <svg className="absolute w-[500px] h-[500px] pointer-events-none opacity-20">
        <motion.circle
          cx="250"
          cy="250"
          r="160"
          fill="none"
          stroke="#4e47ff"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          initial={{ rotate: 246.672 }}
          animate={{ rotate: 246.672 + 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="250"
          cy="250"
          r="220"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1"
          strokeDasharray="2 10"
          strokeLinecap="round"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          initial={{ rotate: -125.338 }}
          animate={{ rotate: -125.338 - 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Center glow */}
      <motion.div
        className="absolute w-4 h-4 bg-white rounded-full blur-sm"
        initial={{ scale: 1.49637 }}
        animate={{ scale: [1.5, 2, 1.5], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const particles = [
  { x: 121.562, y: 176.96, s: 1.47795 },
  { x: -45.4364, y: 214.241, s: 1.49594 },
  { x: -123.158, y: 139.329, s: 1.33264 },
  { x: -198.745, y: -14.659, s: 1.40756 },
  { x: -123.779, y: -170.248, s: 1.45982 },
  { x: 18.1456, y: -200.5, s: 1.41758 },
  { x: 109.092, y: -143.974, s: 1.29465 },
  { x: 194.867, y: 6.9565, s: 1.38545 },
];
