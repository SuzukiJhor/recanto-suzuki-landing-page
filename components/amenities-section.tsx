import {
  Waves,
  PartyPopper,
  Bath,
  UtensilsCrossed,
  Refrigerator,
  Flame,
  Car,
  TreePine,
  Armchair,
  Snowflake,
  CookingPot,
} from "lucide-react"

const amenities = [
  { icon: Waves, name: "Piscina", description: "Piscina ampla e refrescante" },
  { icon: PartyPopper, name: "Salão de Festas", description: "Espaço coberto para eventos" },
  { icon: Bath, name: "Banheiros", description: "Banheiros limpos e equipados" },
  { icon: UtensilsCrossed, name: "Cozinha Equipada", description: "Cozinha completa para uso" },
  { icon: Snowflake, name: "Freezer", description: "Freezer disponível" },
  { icon: Refrigerator, name: "Geladeira", description: "Geladeira espaçosa" },
  { icon: CookingPot, name: "Fogão", description: "Fogão para preparo de refeições" },
  { icon: Flame, name: "Churrasqueira", description: "Churrasqueira completa" },
  { icon: Armchair, name: "Mesas e Cadeiras", description: "Mobiliário para convidados" },
  { icon: Car, name: "Estacionamento", description: "Amplo espaço para veículos" },
  { icon: TreePine, name: "Áreas Verdes", description: "Jardins e gramados" },
]

export function AmenitiesSection() {
  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Estrutura Completa
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa chácara oferece toda a infraestrutura necessária para que sua experiência seja perfeita do início ao
            fim.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
