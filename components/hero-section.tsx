import Image from "next/image"
import Link from "next/link"
import { MessageCircle, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_LINK =
  "https://wa.me/554499409361?text=Olá! Gostaria de saber valores e disponibilidade do Recanto Suzuki."

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ft1.jpg"
          alt="Recanto Suzuki - Vista da piscina e área verde"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo/Name */}
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            <MapPin className="inline-block w-4 h-4 mr-1" />
            Alto Paraná - PR
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance">
          Recanto Suzuki
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-pretty max-w-3xl mx-auto">
          Seu refúgio perfeito para momentos inesquecíveis
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 max-w-2xl mx-auto">
          Chácara completa para festas, eventos e lazer em família. Piscina, churrasqueira, salão de festas e muito
          mais.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Reservar pelo WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            <Link href="#galeria">Ver Fotos</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 animate-in fade-in duration-700 delay-500">
          <a href="tel:+554499409361" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            (44) 99940-9361
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
