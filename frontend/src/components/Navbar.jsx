import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Demo", "Languages", "How it Works"];

  const linkRefs = useRef([]);

  // 🔥 GSAP Hover Animation
  const handleEnter = (index) => {
    gsap.to(linkRefs.current[index], {
      y: -4,
      color: "#0891b2", // cyan-600
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (index) => {
    gsap.to(linkRefs.current[index], {
      y: 0,
      color: "#1f2937", // gray-800
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* 🔥 Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="text-4xl transition duration-300 group-hover:scale-105">
            ⚖️
          </div>

          <h1 className="text-[26px] font-extrabold tracking-tight">
            <span className="text-black">Legal</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              -Ease
            </span>
          </h1>
        </div>

        {/* 🌐 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          {links.map((item, index) => (
            <div
              key={item}
              className="relative overflow-hidden group cursor-pointer h-[26px]"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              {/* 🔥 Scroll Effect */}
              <div className="flex whitespace-nowrap group-hover:animate-scroll">

                <span
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="text-base font-bold text-gray-800 px-2 min-w-full text-center"
                >
                  {item}
                </span>

                <span className="text-base font-bold text-cyan-600 px-2 min-w-full text-center">
                  {item}
                </span>
              </div>

              {/* ✨ Underline */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* 👉 Right Side */}
        <div className="hidden md:flex items-center gap-5">

          <button className="text-gray-700 text-sm font-semibold hover:text-black transition duration-300">
            Sign In
          </button>

          {/* 🚀 CTA */}
          <button className="relative px-6 py-2 rounded-lg font-semibold text-white overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:shadow-cyan-300/50 hover:scale-105 transition duration-300">

            {/* Shine */}
            <span className="absolute -left-10 top-0 w-10 h-full bg-white/40 rotate-12 blur-md group-hover:left-full transition-all duration-700"></span>

            <span className="relative z-10 text-sm">Get Started</span>
          </button>
        </div>

        {/* 📱 Mobile */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white border-t">

          {links.map((item) => (
            <a
              key={item}
              className="block text-base font-semibold text-gray-800 hover:text-black"
            >
              {item}
            </a>
          ))}

          <button className="w-full text-left text-gray-700 font-semibold">
            Sign In
          </button>

          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}