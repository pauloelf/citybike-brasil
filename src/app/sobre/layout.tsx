import type { Metadata } from "next"
import { ScrollToTop } from "@/components/shared/scroll-to-top"

export const metadata: Metadata = {
  title: "Sobre – CityBike Brasil",
  description:
    "Conectando você às redes de bicicletas compartilhadas em todo o Brasil, promovendo mobilidade urbana sustentável e inteligente.",
  keywords: [
    "bicicleta",
    "bike sharing",
    "mobilidade urbana",
    "brasil",
    "sustentabilidade",
  ],
}

export default function SobreLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}
