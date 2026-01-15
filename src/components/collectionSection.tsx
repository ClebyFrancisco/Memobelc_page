import Image from "next/image";
import collection from "../../public/collection.png";

export function ColletionSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-[#fefcf7] via-[#faf8f3] to-[#f5f3ed] rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-2">
              ✨ Organização
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Organize seus estudos com{" "}
              <span className="text-blue-600">Coleções</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Agrupe seus decks por tema, disciplina ou projeto em coleções
              personalizadas. Com as coleções, você mantém seus conteúdos
              organizados, acessa tudo com facilidade e acompanha seu progresso
              em cada área de estudo. Ideal para estudantes, professores e
              autodidatas que querem mais foco e clareza no aprendizado.
            </p>
          </div>

          <div className="flex-1 relative w-full h-48 md:h-60 lg:h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl blur-xl"></div>
            <Image
              src={collection}
              alt="Coleções"
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
