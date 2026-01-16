import Link from "next/link"
import { Home, MessageCircle } from "lucide-react"

const WHATSAPP_LINK =
    "https://wa.me/554499409361?text=Olá! Não encontrei a página no site do Recanto Suzuki."

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">

            <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>

            <h2 className="text-2xl font-semibold mb-2">
                Página não encontrada
            </h2>

            <p className="text-muted-foreground max-w-md mb-8">
                O endereço digitado não existe ou foi movido. Mas você ainda pode conhecer o Recanto Suzuki ou falar conosco agora mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:opacity-90 transition"
                >
                    <Home className="w-5 h-5" />
                    Voltar ao início
                </Link>

                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition"
                >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                </a>

            </div>

        </div>
    )
}
