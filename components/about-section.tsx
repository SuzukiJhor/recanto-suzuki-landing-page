import Image from "next/image"
import { Heart, Users, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ia-recanto-suzuki-2.png"
                alt="Recanto Suzuki - Área da piscina e salão"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Sobre o Espaço
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Um lugar especial para criar memórias
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O <strong>Recanto Suzuki</strong> é mais do que uma chácara — é um espaço pensado para proporcionar
              momentos únicos com quem você ama. Localizado em Alto Paraná, oferecemos o cenário perfeito para
              celebrações, encontros familiares e dias de puro relaxamento.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa estrutura completa garante conforto e praticidade, enquanto a natureza ao redor cria um ambiente
              acolhedor e tranquilo, longe da correria do dia a dia.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Ambiente Familiar</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-semibold text-foreground">Eventos & Festas</span>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-semibold text-foreground">Lazer Completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
