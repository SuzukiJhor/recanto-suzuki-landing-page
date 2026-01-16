import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Recanto Suzuki | Chácara para Alugar em Alto Paraná - Festas e Eventos",
  description:
    "Aluguel de chácara para festas, eventos e lazer em Alto Paraná. Recanto Suzuki oferece piscina, churrasqueira, salão de festas e muito mais. Reserve pelo WhatsApp!",
  keywords:
    "chácara para alugar, chácara para festas, recanto para lazer, aluguel de chácara para eventos, chácara Alto Paraná, espaço para confraternização, Recanto Suzuki",
  authors: [{ name: "Recanto Suzuki" }],
  openGraph: {
    title: "Recanto Suzuki | Chácara para Alugar em Alto Paraná",
    description:
      "Espaço perfeito para festas, eventos e momentos especiais em família. Piscina, churrasqueira, salão de festas e área verde.",
    url: "https://recantosuzuki.com.br",
    siteName: "Recanto Suzuki",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/colagem-fotos-banner.png",
        width: 1200,
        height: 630,
        alt: "Recanto Suzuki - Chácara para Alugar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recanto Suzuki | Chácara para Alugar em Alto Paraná",
    description: "Espaço perfeito para festas, eventos e momentos especiais em família.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Recanto Suzuki",
              description:
                "Chácara para aluguel de festas, eventos e lazer em Alto Paraná. Espaço completo com piscina, churrasqueira, salão de festas e área verde.",
              url: "https://recantosuzuki.com.br",
              telephone: "+55-44-99940-9361",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Alto Paraná",
                addressRegion: "PR",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-23.1319",
                longitude: "-52.3197",
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              image: "/images/colagem-fotos-banner.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
