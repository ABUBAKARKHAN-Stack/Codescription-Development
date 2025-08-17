"use client";

import { motion } from "framer-motion";
import { Rocket, Star, Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          At <span className="text-indigo-400 font-semibold">[Your Startup Name]</span>, 
          we’re not just building websites and apps — we’re crafting digital galaxies.  
          Our mission is to help businesses launch into the future with 
          innovative, scalable, and human-centered solutions.  
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Rocket className="w-10 h-10 text-indigo-400" />,
              title: "Innovation First",
              desc: "Pioneering web & app development solutions that push boundaries and set new standards.",
            },
            {
              icon: <Star className="w-10 h-10 text-purple-400" />,
              title: "Creative Galaxy",
              desc: "Designs and experiences that shine bright, blending tech with creativity.",
            },
            {
              icon: <Globe className="w-10 h-10 text-pink-400" />,
              title: "Global Vision",
              desc: "Helping brands across the world scale their digital presence with impact.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.8 }}
              className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-indigo-700/30 transition"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
