import Image from "next/image";
import sadBrain from "../../public/sad_brain.webp";

export function MemoryWarningSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-[#fefcf7] rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-justify md:text-left">
            <p className="text-2xl font-bold text-black leading-relaxed">
              Nosso cérebro descarta informações que não são revisadas
              corretamente. Sem um método eficiente, tudo o que estudamos
              simplesmente some da nossa memória!
            </p>
          </div>

          <div className="flex-1 relative w-full h-48 md:h-60 lg:h-72">
            <Image
              src={sadBrain}
              alt="Cérebro triste"
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
