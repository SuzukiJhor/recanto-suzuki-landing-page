import Link from "next/link"
import { MessageCircle, Phone, MapPin, Instagram, Facebook } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/554499409361?text=Olá! Gostaria de saber valores e disponibilidade do Recanto Suzuki."

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">Recanto Suzuki</h3>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              Seu espaço ideal para festas, eventos e momentos especiais em família. Estrutura completa em meio à
              natureza de Alto Paraná.
            </p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="tel:+554499409361" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  (44) 99940-9361
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Alto Paraná - PR</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link href="#sobre" className="hover:text-background transition-colors">
                  Sobre o Espaço
                </Link>
              </li>
              <li>
                <Link href="#estrutura" className="hover:text-background transition-colors">
                  Estrutura
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-background transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-background transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} J.Suzuki  Design e Tecnologia LTDA Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
