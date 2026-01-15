import {
  LinkedinLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] text-gray-900 py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <Link
              href="/"
              target="_parent"
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo}
                alt="Logo Memobelc"
                width={140}
                height={140}
                className="object-contain drop-shadow-md"
                priority
              />
            </Link>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm md:text-base text-gray-700">
              © {new Date().getFullYear()} Memobelc LTDA. Todos os direitos
              reservados.
            </p>
            <Link
              href="/privacy-policy"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors inline-block"
            >
              Política de Privacidade
            </Link>
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.linkedin.com/company/memobelc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Linkedin"
            >
              <LinkedinLogoIcon className="w-6 h-6" weight="fill" />
            </a>
            <a
              href="https://www.instagram.com/memobelc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-6 h-6" weight="fill" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <YoutubeLogoIcon className="w-6 h-6" weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
