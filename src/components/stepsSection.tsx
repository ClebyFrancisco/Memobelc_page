import {
  GearSixIcon,
  StackIcon,
  BookOpenTextIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

export function StepsSection() {
  return (
    <section className="text-black py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Transforme seus estudos em <br className="hidden md:block" />
          <span className="text-black">resultados reais</span>
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Do primeiro acesso à memorização de longo prazo, veja como o Memobelc
          te guia até o sucesso.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 relative">
        <div className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
          <div className="bg-white rounded-full p-4 shadow-md">
            <GearSixIcon size={32} weight="fill" />
          </div>
          <p className="mt-4 font-semibold">
            Crie sua conta <br /> gratuitamente
          </p>
        </div>

        <div className="hidden md:block absolute top-6 left-[12.5%] w-[75%] h-px border-t border-dotted border-white z-0" />

        <div className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
          <div className="bg-white rounded-full p-4 shadow-md">
            <StackIcon size={32} weight="fill" />
          </div>
          <p className="mt-4 font-semibold">
            Escolha ou crie <br /> seus decks
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
          <div className="bg-white rounded-full p-4 shadow-md">
            <BookOpenTextIcon size={32} weight="fill" />
          </div>
          <p className="mt-4 font-semibold">
            Estude com repetição <br /> inteligente
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-full md:w-1/4 relative z-10">
          <div className="bg-white rounded-full p-4 shadow-md">
            <CheckCircleIcon size={32} weight="fill" />
          </div>
          <p className="mt-4 font-semibold">
            Veja sua evolução e <br /> memorize de verdade
          </p>
        </div>
      </div>
    </section>
  );
}
