import type { Metadata } from "next"
import { ScrollToTop } from "@/components/shared/scroll-to-top"

export const metadata: Metadata = {
  title: "CityBike Brasil",
  description:
    "Visualize estações disponíveis, número de bikes, vagas e status de operação em diversas cidades brasileiras. Dados atualizados, mapas interativos e informações confiáveis para quem pedala com praticidade e consciência urbana.",
  keywords: [
    "bicicleta",
    "bike sharing",
    "mobilidade urbana",
    "brasil",
    "sustentabilidade",
  ],
}

export default function NetworkLayout({
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
