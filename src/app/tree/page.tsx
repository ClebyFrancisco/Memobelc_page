"use client";
import logo from "../../../public/logo.png";
import instagramlogo from "../../../public/Instagram_logo.svg";
import Image from "next/image";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TreePage() {
  return (
    <>
      <div className="min-h-screen bg-[#219ae7] flex flex-col items-center justify-between p-6 relative">
        <div className="mt-6">
          <Link href="/" target="_parent">
            <Image
              src={logo}
              alt="Logo Memobelc"
              className="h-32 object-contain"
              priority
            />
          </Link>
        </div>

        <div className="bg-orange-400 text-white font-semibold px-6 py-2 rounded-full text-center shadow-md">
          📢 Participe e Fique por Dentro das Novidades!
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => (window.location.href = "https://app.memobelc.com")}
            className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Memobelc Web
          </button>
          <button
            onClick={() => (window.location.href = "https://app.memobelc.com")}
            className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            Memobelc app
          </button>
          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition">
            Estudo e Memorização
          </button>
          <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition">
            Fale conosco
          </button>
        </div>

        <a
          href="https://www.instagram.com/memobelc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors flex flex-col items-center justify-center"
          aria-label="Instagram"
        >
          <Image src={instagramlogo} alt="Instaram" className="h-14" />
          <span className="text-white font-medium">@memobelc</span>
        </a>
      </div>
      <Footer />
    </>
  );
}
