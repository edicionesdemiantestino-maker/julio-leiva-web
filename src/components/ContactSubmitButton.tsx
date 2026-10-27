"use client";

import { motion } from "framer-motion";

export default function ContactSubmitButton() {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-xs font-medium uppercase tracking-[0.15em] text-black transition-colors hover:bg-white/90"
    >
      Preparar mensaje
    </motion.button>
  );
}
