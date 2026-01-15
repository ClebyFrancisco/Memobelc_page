import { Footer } from "@/components/footer";
import Image from "next/image";
import logo from "../../../public/logo.png";
import TreeFloat from "@/components/treeFloat";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade – Memobelc",
  description: "Memobelc é uma plataforma que transforma o aprendizado com o poder da repetição espaçada e IA.",
};

export default function PrivacyPolicy() {
  return (
    <>

      <header className="bg-gradient-to-br from-[#219ae7] via-[#1a8cd8] to-[#0f7bc4] py-6 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          <Link href="/" target="_parent" className="transform transition-transform duration-300 hover:scale-105">
            <Image
              src={logo}
              alt="Logo Memobelc"
              className="h-32 object-contain drop-shadow-lg"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 px-5 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#219ae7] to-[#0f7bc4] bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-gray-900">Data de Vigência:</span> 5 de Maio de 2025
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <p className="text-lg leading-relaxed text-gray-700">
              Memobelc LTDA ({"us"}, {"we"}, or {"our"}) operates the Memobelc
              mobile application (the {"Service"})...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Informações de Contato
            </h2>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-center gap-2">
                <span className="text-[#219ae7] font-bold">Email:</span>
                <a
                  className="text-[#219ae7] hover:text-[#0f7bc4] font-semibold underline transition-colors"
                  href="mailto:contato@memobelc.com"
                >
                  contato@memobelc.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Informações que Coletamos
            </h2>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Nome</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Endereço de email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Senha</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Número de telefone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Conteúdo enviado (imagens, arquivos de áudio, PDFs)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Uso dos Dados
            </h2>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Fornecer e manter o Serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Notificar sobre mudanças no nosso Serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Permitir participação em recursos interativos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Fornecer suporte ao cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Coletar análises para melhorar o Serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Monitorar o uso do Serviço</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Detectar, prevenir e resolver problemas técnicos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Enviar emails, promoções, dicas e sugestões</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">
                  Para campanhas de marketing digital e remarketing pela Memobelc e seus parceiros
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Publicidade
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Podemos usar provedores de serviços de terceiros para exibir anúncios...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Modelo Freemium, Assinaturas e Compras no App
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Nosso app oferece conteúdo gratuito e premium...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Acesso a Recursos do Dispositivo
            </h2>
            <ul className="list-none space-y-3 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Acesso à galeria de mídia para enviar imagens, áudio, PDFs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#219ae7] mt-1">•</span>
                <span className="text-gray-700">Notificações push</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Segurança dos Dados
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Nos esforçamos para usar meios comercialmente aceitáveis para proteger seus dados...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Provedores de Serviço
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Podemos empregar empresas e indivíduos terceirizados...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Analytics
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Firebase Analytics</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Firebase Analytics é fornecido pelo Google. Mais informações:{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#219ae7] hover:text-[#0f7bc4] font-semibold underline transition-colors"
              >
                Política de Privacidade do Firebase
              </a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Links para Outros Sites
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Nosso Serviço pode conter links para outros sites não operados por nós...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Mudanças nesta Política de Privacidade
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Podemos atualizar nossa Política de Privacidade de tempos em tempos...
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#219ae7] to-[#0f7bc4] rounded-full"></span>
              Seus Direitos
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Você tem o direito de acessar, atualizar ou excluir seus dados...
            </p>
          </div>

          <section
            id="account-deletion"
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 md:p-8 mb-12 border border-red-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></span>
              Exclusão de Conta
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Para excluir sua conta e todos os dados associados, envie um email para{" "}
              <a
                href="mailto:contato@memobelc.com"
                className="text-[#219ae7] hover:text-[#0f7bc4] font-semibold underline transition-colors"
              >
                contato@memobelc.com
              </a>{" "}
              com o assunto <em className="font-semibold">&quot;Solicitação de Exclusão de Conta&quot;</em>.
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Quais dados serão excluídos?
            </h3>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 font-bold">•</span>
                <span className="text-gray-700">Seu nome, email e senha criptografada</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 font-bold">•</span>
                <span className="text-gray-700">
                  Todo o conteúdo que você enviou. Conteúdo compartilhado/duplicado não será excluído.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1 font-bold">•</span>
                <span className="text-gray-700">Histórico de uso e progresso de aprendizado</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 border border-red-200">
              <p className="text-gray-700 font-semibold">
                Não retemos nenhum dado pessoal após a exclusão.
              </p>
            </div>
          </section>
        </div>
      </main>
      <TreeFloat />
      <Footer />
    </>
  );
}
