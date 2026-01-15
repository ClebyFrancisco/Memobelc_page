import Image from "next/image";
import sadBrain from "../../public/sad_brain.webp";

export function MemoryWarningSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚠️ Atenção
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              Nosso cérebro descarta informações que não são revisadas
              corretamente. Sem um método eficiente, tudo o que estudamos
              simplesmente <span className="text-red-600">some da nossa memória!</span>
            </p>
          </div>

          <div className="flex-1 relative w-full h-48 md:h-60 lg:h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-2xl blur-xl"></div>
            <Image
              src={sadBrain}
              alt="Cérebro triste"
              fill
              className="object-contain relative z-10 transform transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
