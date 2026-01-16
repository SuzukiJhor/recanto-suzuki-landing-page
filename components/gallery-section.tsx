"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/ft1.jpg",
    alt: "Recanto Suzuki - Pergolado e piscina",
  },
  {
    src: "/images/ft7.jpg",
    alt: "Recanto Suzuki - Área para cerimônias",
  },
  {
    src: "/images/ia-recanto-suzuki-2.png",
    alt: "Recanto Suzuki - Salão e piscina",
  },
  {
    src: "/images/ft8.jpg",
    alt: "Recanto Suzuki - Espreguiçadeiras na piscina",
  },
  {
    src: "/images/ft6.jpg",
    alt: "Recanto Suzuki - Área de descanso",
  },
  {
    src: "/images/entrada.jpg",
    alt: "Recanto Suzuki - Entrada",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Galeria de Fotos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Conheça nosso espaço</h2>
          <p className="text-lg text-muted-foreground">
            Veja as fotos e imagine os momentos especiais que você pode viver aqui.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Ver foto
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
              aria-label="Próxima"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
