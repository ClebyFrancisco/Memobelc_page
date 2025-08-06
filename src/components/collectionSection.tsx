import Image from "next/image";
import collection from "../../public/collection.png";

export function ColletionSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-[#fefcf7] rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-justify md:text-left">
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              Organize seus estudos com Coleções
            </h2>
            <p className="text-2xl  text-black leading-relaxed text-center">
              Agrupe seus decks por tema, disciplina ou projeto em coleções
              personalizadas. Com as coleções, você mantém seus conteúdos
              organizados, acessa tudo com facilidade e acompanha seu progresso
              em cada área de estudo. Ideal para estudantes, professores e
              autodidatas que querem mais foco e clareza no aprendizado.
            </p>
          </div>

          <div className="flex-1 relative w-full h-48 md:h-60 lg:h-72">
            <Image
              src={collection}
              alt="Mega pack"
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
