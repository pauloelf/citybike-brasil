import { ButtonLinkWithArrow } from "@/components/ui/button-link"
import { HowWorks } from "./_components/how-works"
import { Mission } from "./_components/mission"

export default function SobrePage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="space-y-6 px-6 sm:px-8 py-12 text-center">
        <h1 className="font-bold text-4xl md:text-6xl text-balance">
          Sobre o <span className="text-primary">CityBike Brasil</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-pretty">
          Conectando você às redes de bicicletas compartilhadas em todo o
          Brasil, promovendo mobilidade urbana sustentável e inteligente.
        </p>
      </div>

      <Mission />
      <HowWorks />

      <div className="px-6 sm:px-8 py-8 text-center">
        <h2 className="mb-4 font-bold text-foreground text-2xl">
          Pronto para pedalar?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Explore as redes de bicicletas compartilhadas disponíveis no Brasil
        </p>
        <ButtonLinkWithArrow>Ver Redes Disponíveis</ButtonLinkWithArrow>
      </div>
    </main>
  )
}
