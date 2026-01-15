import {
  ClipboardTextIcon,
  MicrophoneIcon,
  HeadphonesIcon,
  CameraIcon,
} from "@phosphor-icons/react/dist/ssr";

export function ResourcesSection() {
  const resources = [
    {
      icon: ClipboardTextIcon,
      label: "Textos",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: HeadphonesIcon,
      label: "Áudios",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: CameraIcon,
      label: "Vídeos",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: MicrophoneIcon,
      label: "Chat",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Múltiplos formatos de conteúdo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`${resource.bgColor} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100`}
              >
                <div className={`bg-gradient-to-br ${resource.color} rounded-2xl p-4 shadow-lg`}>
                  <Icon size={32} weight="fill" className="text-white" />
                </div>
                <span className="font-bold text-gray-900 text-lg">{resource.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
