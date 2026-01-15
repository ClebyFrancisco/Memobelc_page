import {
  GearSixIcon,
  StackIcon,
  BookOpenTextIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/dist/ssr";

export function StepsSection() {
  const steps = [
    {
      icon: GearSixIcon,
      title: "Crie sua conta",
      subtitle: "gratuitamente",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: StackIcon,
      title: "Escolha ou crie",
      subtitle: "seus decks",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: BookOpenTextIcon,
      title: "Estude com repetição",
      subtitle: "inteligente",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: CheckCircleIcon,
      title: "Veja sua evolução e",
      subtitle: "memorize de verdade",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="text-gray-900 py-20 md:py-28 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Transforme seus estudos em{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            resultados reais
          </span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Do primeiro acesso à memorização de longo prazo, veja como o Memobelc
          te guia até o sucesso.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-yellow-500 opacity-20 rounded-full"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div
                  className={`${step.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 w-full border border-gray-100`}
                >
                  <div className={`bg-gradient-to-br ${step.color} rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md flex items-center justify-center`}>
                    <Icon size={32} weight="fill" className="text-white" />
                  </div>
                  <p className="font-bold text-lg text-gray-900 mb-1">
                    {step.title}
                  </p>
                  <p className="font-semibold text-gray-700">{step.subtitle}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
