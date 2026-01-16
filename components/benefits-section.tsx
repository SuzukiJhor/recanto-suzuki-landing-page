import { Leaf, MapPin, PartyPopper, Users, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Ambiente Tranquilo",
    description: "Desconecte-se da agitação urbana e aproveite a paz e serenidade da natureza.",
  },
  {
    icon: MapPin,
    title: "Fácil Acesso",
    description: "Localização privilegiada em Alto Paraná com acesso simples e sinalizado.",
  },
  {
    icon: PartyPopper,
    title: "Ideal para Festas",
    description: "Estrutura completa para aniversários, casamentos, formaturas e confraternizações.",
  },
  {
    icon: Users,
    title: "Espaço para Família",
    description: "Área ampla e segura para crianças e adultos aproveitarem juntos.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Espaço privativo e cercado para tranquilidade de todos os convidados.",
  },
  {
    icon: Clock,
    title: "Flexibilidade",
    description: "Horários flexíveis para você aproveitar o dia da forma que preferir.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Por que escolher
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            O lugar ideal para seu evento
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra os benefícios de celebrar momentos especiais no Recanto Suzuki.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
