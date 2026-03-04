"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrolldownIndicator = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're near the bottom (within 100px)
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      setAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed z-100 bottom-8 right-8 flex flex-col items-center gap-2 transition-all duration-300 ${
        atBottom ? "cursor-pointer" : ""
      }`}
    >
      {/* Mouse shell - Only show if NOT at bottom */}
      <div
        className={`rounded-full border-2 border-border flex justify-center pt-1.5 overflow-hidden transition-all duration-500 ease-in-out ${
          atBottom
            ? "w-0 h-0 border-0 opacity-0"
            : "w-6 h-10 border-2 opacity-100"
        }`}
      >
        <div className="w-1 h-2 rounded-full bg-text-secondary animate-scroll-dot" />
      </div>

      {/* Chevron - Always show, invert if at bottom */}
      <ChevronDown
        className={`text-text-muted animate-bounce transition-all duration-500 ease-in-out ${
          atBottom ? "rotate-180 w-8 h-8 text-brand" : "w-4 h-4"
        }`}
        strokeWidth={2}
      />
    </div>
  );
};

export default ScrolldownIndicator;
