import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import { assets } from "../assets/assets";

const images = [
  assets.hero4,
  assets.hero2,
  assets.hero3,
];

const Head = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* 🔥 Background image fade motion */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20">
        <Header />

        <div className="container mx-auto text-center flex flex-col justify-center items-center min-h-screen px-6">

          {/* ✨ Text slide + fade */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-snug max-w-5xl"
          >
            Building a better future by designing best practices for
            organisation and business success.
          </motion.h1>

          {/* 🚀 Button pop animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="/#Contact"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-7 py-3 rounded-2xl text-lg font-semibold transition"
            >
              Get Started
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Head;
