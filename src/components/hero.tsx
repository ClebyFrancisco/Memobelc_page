"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import iPhone16Pro from "../../public/iPhone16Pro.png";
import { Button } from "../components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-white py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="absolute inset-0 lg:hidden">
        <Image
          src={iPhone16Pro}
          alt="Mobile background"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="flex justify-center lg:justify-start transform transition-all duration-500 hover:scale-105">
              <Image
                src={logo}
                alt="Logo"
                width={200}
                height={110}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Aprendizado inteligente que{" "}
              <span className="text-yellow-300">evolui</span> com você!
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-white/90 leading-relaxed">
              Crie flashcards, revise com estratégia e conquiste resultados. Com
              o Memobelc, estudar fica simples, rápido e inteligente.
            </p>
            <div className="w-full flex items-center justify-center lg:justify-start pt-4">
              <Button
                onClick={() =>
                  (window.location.href = "https://app.memobelc.com")
                }
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 rounded-full px-10 py-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                Comece a Memorizar Agora
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative z-10 w-full h-full">
              <Image
                src={iPhone16Pro}
                alt="Mobile preview"
                fill
                className="object-contain drop-shadow-2xl transform transition-all duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
