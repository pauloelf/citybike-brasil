import type { Metadata } from "next"
import { ScrollToTop } from "@/components/shared/scroll-to-top"

export const metadata: Metadata = {
  title:
    "FAQ | Dúvidas Frequentes sobre Bicicletas Compartilhadas – CityBike Brasil",
  description:
    "Encontre respostas para as perguntas mais comuns sobre o uso de bicicletas compartilhadas no CityBike Brasil. Saiba como funcionam as estações, os dados em tempo real, as redes disponíveis, e muito mais. Tudo o que você precisa para pedalar com confiança e informação.",
  keywords: [
    "bicicleta",
    "bike sharing",
    "mobilidade urbana",
    "brasil",
    "sustentabilidade",
  ],
}

export default function FaqLayout({
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
