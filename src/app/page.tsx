"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="h-screen grid-bg relative overflow-hidden">
      <div className="h-full flex flex-col justify-between p-6 md:p-10 lg:p-12">
        <header className="flex justify-end">
          <span className="text-white text-lg md:text-xl font-bold tracking-wider">
            2025
          </span>
        </header>

        <section className="flex-1 flex flex-col justify-center">
          <div
            className="relative"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1 className="poster-text text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">ПОРА</span>
              <span className="block">ПРОВЕРИТЬ</span>
              <span className="block">ЗРЕНИЕ,</span>
              <span className="block">А ТО Я</span>
              <span className="block">БОЛЬШЕ</span>
              <span className="block">НЕ</span>
              <span className="block">ВИЖУ</span>
            </h1>

            <div className="mt-1">
              <span className="poster-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-400 blur-text">
                СМЫСЛА
              </span>
            </div>
          </div>
        </section>

        <footer className="flex justify-center">
          <div className="flex items-center gap-3 text-gray-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            <span className="hover:text-white transition-colors duration-300 cursor-default">KOETE</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors duration-300 cursor-default">DSTTP</span>
            <span className="text-gray-700">•</span>
            <span className="hover:text-white transition-colors duration-300 cursor-default">LUVL</span>
          </div>
        </footer>
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2">
        <span 
          className="text-gray-700 text-md font-mono tabular-nums tracking-widest italic"
          style={{ writingMode: "vertical-rl" }}
        >
          {formatTime(seconds)}
        </span>
      </div>
    </main>
  );
}
