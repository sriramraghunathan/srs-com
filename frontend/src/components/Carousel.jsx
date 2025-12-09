// src/components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "High-Performance Laptops",
    text: "Powerful laptops for gaming, editing and productivity.",
    bg: "from-blue-500 to-indigo-700",
  },
  {
    title: "Custom Built PCs",
    text: "Get your dream PC configured for work or play.",
    bg: "from-emerald-500 to-teal-700",
  },
  {
    title: "Accessories & Peripherals",
    text: "Monitors, keyboards, mice, headsets and more.",
    bg: "from-purple-500 to-pink-600",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[index];

  return (
    <div className="w-full flex justify-center mt-8 px-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
        {/* Slide */}
        <div
          className={`h-64 sm:h-80 md:h-96 bg-gradient-to-r ${current.bg} flex flex-col justify-center px-6 sm:px-10 text-white transition-all`}
        >
          <p className="text-sm sm:text-base uppercase tracking-wide text-white/70">
            Sriram Systems
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            {current.title}
          </h2>

          <p className="mt-3 text-sm sm:text-base max-w-md text-white/90">
            {current.text}
          </p>

          <button className="mt-5 px-4 py-2 rounded-md bg-white/10 border border-white/30 hover:bg-white/20">
            Shop Now
          </button>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/4 translate-y-1/4 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/4 translate-y-1/4  hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
