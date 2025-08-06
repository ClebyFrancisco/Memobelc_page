"use client";
import Image from "next/image";
import mobiles from "../../public/mobiles.png";
import logo from "../../public/logo.png";
import iPhone16Pro from "../../public/iPhone16Pro.png";
import { Button } from "../components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#219ae7] text-white py-16">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={iPhone16Pro}
          alt="Mobile background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left space-y-6">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={logo}
                alt="Logo"
                width={180}
                height={100}
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Aprendizado inteligente que evolui com você!
            </h1>
            <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Crie flashcards, revise com estratégia e conquiste resultados. Com
              o Memobelc, estudar fica simples, rápido e inteligente.
            </p>
            <div className=" w-full flex items-center justify-center">
              <Button
                onClick={() =>
                  (window.location.href = "https://app.memobelc.com")
                }
                className="bg-yellow-400 text-black text-base hover:bg-yellow-300 rounded-full px-8 py-4"
              >
                Comece a Memorizar Agora
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={iPhone16Pro}
              alt="Mobile preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
