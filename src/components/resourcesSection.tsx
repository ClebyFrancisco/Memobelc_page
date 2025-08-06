import {
  ClipboardTextIcon,
  MicrophoneIcon,
  HeadphonesIcon,
  CameraIcon,
} from "@phosphor-icons/react/dist/ssr";

export function ResourcesSection() {
  return (
    <section className=" py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-200 rounded-full p-3">
              <ClipboardTextIcon
                size={28}
                weight="fill"
                className="text-black"
              />
            </div>
            <span className="font-semibold text-black">Textos</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-200 rounded-full p-3">
              <HeadphonesIcon size={28} weight="fill" className="text-black" />
            </div>
            <span className="font-semibold text-black">Áudios</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple-200 rounded-full p-3">
              <CameraIcon size={28} weight="fill" className="text-black" />
            </div>
            <span className="font-semibold text-black">Vídeos</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-200 rounded-full p-3">
              <MicrophoneIcon size={28} weight="fill" className="text-black" />
            </div>
            <span className="font-semibold text-black">Chat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
