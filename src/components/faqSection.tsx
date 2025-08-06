import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="py-12 px-4">
      <Accordion type="single" collapsible className="container mx-auto">
        <h2 className="font-bold text-4xl my-8">Perguntas Frequentes</h2>
        <AccordionItem
          value="item-1"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            O que é o Memobelc?
          </AccordionTrigger>
          <AccordionContent>
            O Memobelc é um aplicativo de memorização que usa a técnica de
            repetição espaçada para ajudar você a aprender e lembrar conteúdos
            com mais eficiência. Ideal para quem estuda para provas, concursos
            ou apenas quer fixar melhor o que aprende no dia a dia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Como funciona a repetição espaçada?
          </AccordionTrigger>
          <AccordionContent>
            É simples: ao invés de estudar tudo de uma vez, o Memobelc te mostra
            as informações nos momentos ideais para que você não esqueça. Isso
            ativa o seu cérebro no tempo certo, ajudando a fixar o conteúdo na
            memória de longo prazo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Preciso pagar para usar o app?
          </AccordionTrigger>
          <AccordionContent>
            Você pode começar gratuitamente! O Memobelc oferece recursos
            essenciais sem custo. Também temos uma versão premium com
            funcionalidades extras para quem quer turbinar ainda mais os
            estudos.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Posso criar meus próprios flashcards?
          </AccordionTrigger>
          <AccordionContent>
            Sim! Você pode criar seus próprios cards, organizar em decks
            (coleções) e personalizar com texto, e até áudio. Tudo pensado para
            deixar seu estudo mais rico e com a sua cara.{" "}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            O que é o módulo de livros?
          </AccordionTrigger>
          <AccordionContent>
            É uma biblioteca digital dentro do Memobelc, com livros. Você pode
            acessar e ler diretamente pelo sistema, e transformar esses
            conteúdos em flashcards com poucos toques — facilitando a revisão e
            a memorização depois.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Como funciona o módulo de vídeos?
          </AccordionTrigger>
          <AccordionContent>
            Você encontra vídeos educativos divididos por idioma, tema e
            dificuldade. Eles foram pensados para reforçar o conteúdo, e
            transformar esses conteúdos em flashcards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Posso usar o app em sala de aula?
          </AccordionTrigger>
          <AccordionContent>
            Sim! O Memobelc foi pensado para funcionar tanto no uso individual
            quanto como ferramenta de apoio em escolas, cursos e mentorias.
            Existe uma área exclusiva para educadores. Professores podem criar
            turmas, acompanhar o desempenho dos alunos e enviar materiais
            personalizados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-8"
          className="bg-[#fefcf7] rounded-xl shadow-md p-8 mb-2"
        >
          <AccordionTrigger className="font-bold text-sm">
            Como posso ter acesso a recursos exclusivos para educadores?
          </AccordionTrigger>
          <AccordionContent>
            Se você é professor ou educador e quer desbloquear funcionalidades
            especiais, turmas personalizadas, basta entrar em contato com o
            nosso time de suporte.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
