"use client"

import { motion } from "motion/react"

export default function GamesShowcase() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#1a1a2e] via-[#0a0a0f] to-[#1a1a2e] overflow-hidden border-none">
      {/* Cosmic animated background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#8b5cf6]/20 opacity-80 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#00d4ff]/10 via-transparent to-[#8b5cf6]/10 opacity-60" />
        {/* Removed subtle stars/particles for hydration safety */}
      </div>
      <div className="relative container mx-auto px-4 max-w-7xl z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#00d4ff] via-[#8b5cf6] to-[#00ff88] bg-clip-text font-display mb-4">
            More Games Coming Soon ✨
          </h2>
          <p className="text-base text-[#b4b4c7] max-w-2xl mx-auto">
            Stay tuned for more epic games on the <span className="text-transparent bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text font-semibold">Somnia network</span> 🚀
          </p>
        </motion.div>
      </div>
    </section>
  )
}