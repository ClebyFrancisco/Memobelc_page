"use client";
import { PaperclipIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef } from "react";

export default function TreeFloat() {
  const floatBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const floatBtn = floatBtnRef.current;
    if (!floatBtn) return;

    const animation = floatBtn.animate(
      [
        { boxShadow: "0 0 0 0 #2ecc71" },
        { boxShadow: "0 0 0 20px rgba(0, 200, 0, 0)" },
      ],
      {
        duration: 2000,
        easing: "ease-out",
        iterations: Infinity,
      }
    );

    animation.addEventListener("iteration", (event) => {
      const e = event as AnimationPlaybackEvent;
    });
  }, []);

  return (
    <a
      ref={floatBtnRef}
      href="/tree"
      target="_parent"
      className="fixed bottom-8 right-8 z-[9999] w-[60px] h-[60px] rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 hover:from-green-500 hover:to-green-500 transition-all duration-500"
    >
      <PaperclipIcon size={28} className="text-white" />
    </a>
  );
}
