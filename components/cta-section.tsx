import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK =
  "https://wa.me/554499409361?text=Olá! Gostaria de saber valores e disponibilidade do Recanto Suzuki."

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/ft7.jpg" alt="Recanto Suzuki - Área de eventos" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-white/80" />

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Reserve sua data especial</h2>

          <p className="text-xl md:text-2xl text-white/90 mb-4">Não deixe para última hora!</p>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Entre em contato agora pelo WhatsApp e consulte as datas disponíveis. Estamos prontos para ajudar você a
            planejar um evento inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
            <a href="tel:+554499409361" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              (44) 99940-9361
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
