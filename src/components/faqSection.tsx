import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o Memobelc
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              O que é o Memobelc?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              O Memobelc é um aplicativo de memorização que usa a técnica de
              repetição espaçada para ajudar você a aprender e lembrar conteúdos
              com mais eficiência. Ideal para quem estuda para provas, concursos
              ou apenas quer fixar melhor o que aprende no dia a dia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Como funciona a repetição espaçada?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              É simples: ao invés de estudar tudo de uma vez, o Memobelc te mostra
              as informações nos momentos ideais para que você não esqueça. Isso
              ativa o seu cérebro no tempo certo, ajudando a fixar o conteúdo na
              memória de longo prazo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Preciso pagar para usar o app?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              Você pode começar gratuitamente! O Memobelc oferece recursos
              essenciais sem custo. Também temos uma versão premium com
              funcionalidades extras para quem quer turbinar ainda mais os
              estudos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Posso criar meus próprios flashcards?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              Sim! Você pode criar seus próprios cards, organizar em decks
              (coleções) e personalizar com texto, e até áudio. Tudo pensado para
              deixar seu estudo mais rico e com a sua cara.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              O que é o módulo de livros?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              É uma biblioteca digital dentro do Memobelc, com livros. Você pode
              acessar e ler diretamente pelo sistema, e transformar esses
              conteúdos em flashcards com poucos toques — facilitando a revisão e
              a memorização depois.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Como funciona o módulo de vídeos?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              Você encontra vídeos educativos divididos por idioma, tema e
              dificuldade. Eles foram pensados para reforçar o conteúdo, e
              transformar esses conteúdos em flashcards.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Posso usar o app em sala de aula?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              Sim! O Memobelc foi pensado para funcionar tanto no uso individual
              quanto como ferramenta de apoio em escolas, cursos e mentorias.
              Existe uma área exclusiva para educadores. Professores podem criar
              turmas, acompanhar o desempenho dos alunos e enviar materiais
              personalizados.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className="bg-gradient-to-br from-[#fefcf7] to-[#faf8f3] rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <AccordionTrigger className="font-bold text-base md:text-lg px-6 py-4 hover:no-underline">
              Como posso ter acesso a recursos exclusivos para educadores?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
              Se você é professor ou educador e quer desbloquear funcionalidades
              especiais, turmas personalizadas, basta entrar em contato com o
              nosso time de suporte.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
