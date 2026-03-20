import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [language, setLanguage] = useState("Hindi");

  const translations = {
    Hindi: "आपको सभी नुकसान की जिम्मेदारी लेनी होगी।",
    Tamil: "நீங்கள் அனைத்து இழப்புகளுக்கும் பொறுப்பாக இருப்பீர்கள்.",
    Telugu: "మీరు అన్ని నష్టాలకు బాధ్యత వహించాలి.",
  };

  return (
    <div className="relative h-screen w-full bg-[#05070d] text-white overflow-hidden flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Understand Contracts{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]">
            Before They Cost You
          </span>
        </motion.h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Translate complex legal documents into plain
          <span className="text-yellow-400 font-semibold"> Hindi</span>,
          <span className="text-yellow-400 font-semibold"> Tamil</span>, or
          <span className="text-yellow-400 font-semibold"> Telugu</span> — detect hidden risks instantly.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          {[
            { value: "50K+", label: "Contracts" },
            { value: "3", label: "Languages" },
            { value: "98%", label: "Accuracy" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-cyan-400">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
        >
          {/* Language Switch */}
          <div className="flex justify-end gap-2 mb-4">
            {["Hindi", "Tamil", "Telugu"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-lg text-sm transition ${
                  language === lang
                    ? "bg-cyan-500 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Upload */}
            <div className="text-left bg-[#0b1220] p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Upload Contract</p>
              <div className="p-4 border border-dashed border-cyan-400/40 rounded-xl">
                <p className="text-sm text-gray-300">Drop PDF or DOCX</p>
                <button className="mt-3 px-4 py-2 text-sm rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition">
                  Browse Files
                </button>
              </div>
            </div>

            {/* Result */}
            <div className="text-left bg-[#0b1220] p-5 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Simplified Version</p>

              <div className="bg-white text-black p-3 rounded-lg text-sm">
                {translations[language]}
              </div>

              <div className="mt-4">
                <p className="text-yellow-400 text-sm font-semibold">
                  ⚠ Risk: HIGH
                </p>
                <ul className="text-gray-400 text-sm mt-2 list-disc ml-4">
                  <li>Vendor covers all losses</li>
                  <li>Legal cost liability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-105 transition">
              Try Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
