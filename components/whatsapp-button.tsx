import Link from "next/link"
import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/554499409361?text=Olá! Gostaria de saber valores e disponibilidade do Recanto Suzuki."

export function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
        1
      </span>
    </Link>
  )
}
