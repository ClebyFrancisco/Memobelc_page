"use client";
import { useState } from "react";
import logo from "../../../public/logo.png";
import instagramlogo from "../../../public/Instagram_logo.svg";
import Image from "next/image";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ContactModal } from "@/components/contactModal";
import {
  GlobeIcon,
  DeviceMobileIcon,
  BookOpenTextIcon,
  ChatCircleDotsIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function TreePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactSubmit = (data: { name: string; email: string; phone: string }) => {
    // Here you can save the data to your backend/API
    console.log("Contact data:", data);
    
    // Close modal
    setIsModalOpen(false);
    
    // Redirect to app registration
    window.location.href = "https://app.memobelc.com";
  };
  const buttons = [
    {
      icon: GlobeIcon,
      label: "Memobelc Web",
      href: "https://app.memobelc.com",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      hoverGradient: "from-blue-300 via-blue-400 to-blue-500",
      iconColor: "text-blue-600",
    },
    {
      icon: DeviceMobileIcon,
      label: "Memobelc App",
      href: "https://app.memobelc.com",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      hoverGradient: "from-purple-300 via-purple-400 to-purple-500",
      iconColor: "text-purple-600",
    },
    {
      icon: BookOpenTextIcon,
      label: "Estudo e Memorização",
      href: "#",
      gradient: "from-green-400 via-green-500 to-green-600",
      hoverGradient: "from-green-300 via-green-400 to-green-500",
      iconColor: "text-green-600",
    },
    {
      icon: ChatCircleDotsIcon,
      label: "Fale conosco",
      href: "#",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      hoverGradient: "from-orange-300 via-orange-400 to-orange-500",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Logo */}
        <div className="mb-8 relative z-10">
          <Link href="/" target="_parent" className="transform transition-transform duration-300 hover:scale-110 inline-block">
            <Image
              src={logo}
              alt="Logo Memobelc"
              className="h-28 md:h-36 object-contain drop-shadow-2xl"
              priority
            />
          </Link>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-2xl space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Bem-vindo ao{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Memobelc
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
              Escolha uma opção abaixo para começar sua jornada de aprendizado
            </p>
          </div>

          {/* Banner de Novidades */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold px-6 py-4 rounded-2xl text-center shadow-2xl mb-8 transform transition-all duration-300 hover:scale-105 border-2 border-orange-300/50 relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <div className="relative z-10 flex items-center justify-center gap-3">
              <SparkleIcon size={24} weight="fill" className="animate-spin-slow" />
              <span>Participe e Fique por Dentro das Novidades!</span>
              <SparkleIcon size={24} weight="fill" className="animate-spin-slow-delayed" />
            </div>
          </button>

          {/* Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buttons.map((button, index) => {
              const Icon = button.icon;
              return (
                <button
                  key={index}
                  onClick={() => button.href !== "#" && (window.location.href = button.href)}
                  className="group relative bg-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/50 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${button.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className={`bg-gradient-to-br ${button.gradient} rounded-2xl p-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={40} weight="fill" className="text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                      {button.label}
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              );
            })}
          </div>

          {/* Instagram Section */}
          <div className="pt-8">
            <a
              href="https://www.instagram.com/memobelc/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
              aria-label="Instagram"
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 shadow-2xl group-hover:bg-white/30 transition-all duration-300 border-2 border-white/30 group-hover:border-white/50">
                <Image src={instagramlogo} alt="Instagram" className="h-14 w-14" />
              </div>
              <div className="text-center">
                <span className="text-white font-bold text-xl drop-shadow-lg block">Siga-nos no Instagram</span>
                <span className="text-yellow-300 font-semibold text-lg drop-shadow-lg">@memobelc</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleContactSubmit}
      />
      
      <Footer />
    </>
  );
}
