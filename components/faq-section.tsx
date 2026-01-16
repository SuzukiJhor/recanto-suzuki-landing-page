import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qual é a capacidade máxima de pessoas?",
    answer:
      "O Recanto Suzuki comporta confortavelmente até 100 pessoas, com espaço suficiente para mesas, área de circulação e lazer. Para eventos maiores, entre em contato para avaliarmos juntos.",
  },
  {
    question: "Qual é o horário de funcionamento para locação?",
    answer:
      "A locação pode ser feita para período diurno (8h às 18h), noturno (18h às 00h) ou diária completa (8h às 00h). Horários especiais podem ser negociados.",
  },
  {
    question: "O que está incluído na locação?",
    answer:
      "Estão inclusos: piscina, salão de festas, churrasqueira, cozinha equipada (geladeira, freezer, fogão), mesas, cadeiras, banheiros e estacionamento. Itens de decoração e alimentação ficam por conta do contratante.",
  },
  {
    question: "É permitido som alto e música?",
    answer:
      "Sim, é permitido som e música até às 22h, respeitando as normas locais. Após esse horário, pedimos que o volume seja reduzido para não incomodar a vizinhança.",
  },
  {
    question: "Como funciona a reserva e o pagamento?",
    answer:
      "A reserva é confirmada mediante pagamento de sinal (50% do valor). O restante deve ser quitado até a data do evento. Aceitamos PIX, transferência bancária e dinheiro.",
  },
  {
    question: "Posso visitar o espaço antes de reservar?",
    answer:
      "Claro! Agende uma visita pelo WhatsApp para conhecer toda a estrutura do Recanto Suzuki pessoalmente. Será um prazer recebê-lo(a)!",
  },
  {
    question: "Há alguma regra sobre a piscina?",
    answer:
      "A piscina é de uso livre durante o período de locação. Pedimos apenas que crianças sejam supervisionadas por adultos e que não seja utilizada após às 22h.",
  },
  {
    question: "É necessário deixar caução?",
    answer:
      "Sim, solicitamos uma caução que é devolvida integralmente após a vistoria do espaço, desde que tudo esteja em ordem.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Perguntas e Respostas</h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre locação, estrutura e regras do Recanto Suzuki.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
