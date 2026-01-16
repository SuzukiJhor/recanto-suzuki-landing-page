import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Fernanda Costa",
    event: "Aniversário de 15 anos",
    rating: 5,
    text: "Realizamos a festa de 15 anos da minha filha no Recanto Suzuki e foi perfeito! O espaço é lindo, bem cuidado e a estrutura atendeu todas as nossas necessidades. Super recomendo!",
    date: "Março 2025",
  },
  {
    name: "Carlos e Ana Silva",
    event: "Casamento",
    rating: 5,
    text: "Nosso casamento foi um sonho! O cenário natural, o pergolado decorado e toda a estrutura fizeram nosso dia ainda mais especial. Atendimento nota 10!",
    date: "Fevereiro 2025",
  },
  {
    name: "Roberto Oliveira",
    event: "Confraternização de empresa",
    rating: 5,
    text: "Fizemos a confraternização de fim de ano da empresa aqui. Espaço amplo, churrasqueira excelente, piscina limpa. Os funcionários adoraram! Voltaremos com certeza.",
    date: "Dezembro 2024",
  },
  {
    name: "Juliana Mendes",
    event: "Chá de bebê",
    rating: 5,
    text: "Lugar encantador! Fiz o chá de bebê da minha sobrinha e ficou maravilhoso. Área verde linda para fotos, cozinha completa e muito espaço. Amamos!",
    date: "Janeiro 2025",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de momentos especiais vividos no Recanto Suzuki.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
                <span className="text-sm text-muted-foreground">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-muted rounded-full">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">• 47 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  )
}
