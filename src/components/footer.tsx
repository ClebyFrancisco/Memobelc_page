import {
  LinkedinLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import logo from "../../public/logo.png";

export function Footer() {
  return (
    <footer className=" text-black py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <a href="/" target="_parent">
            <Image
              src={logo}
              alt="Logo Memobelc"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </a>
        </div>

        <div className="text-center text-sm md:text-base">
          <p className="mb-2">
            © {new Date().getFullYear()} Memobelc LTDA. Todos os direitos
            reservados.
          </p>
          <a href="/privacy-policy" className="font-bold hover:underline">
            Política de Privacidade
          </a>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <a
            href="https://www.linkedin.com/company/memobelc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Linkedin"
          >
            <LinkedinLogoIcon className="w-6 h-6" weight="fill" />
          </a>
          <a
            href="https://www.instagram.com/memobelc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <InstagramLogoIcon className="w-6 h-6" weight="fill" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
            aria-label="YouTube"
          >
            <YoutubeLogoIcon className="w-6 h-6" weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
}
