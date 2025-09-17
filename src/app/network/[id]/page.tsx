import { NetworkDetails } from "./_components/network-details"

interface NetworkPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: NetworkPageProps) {
  const { id } = await params

  return {
    title:
      `${id} | Estações e Bicicletas em Tempo Real – CityBike Brasil` ||
      "Estações e Bicicletas em Tempo Real – CityBike Brasil",
  }
}

export default async function NetworkPage({ params }: NetworkPageProps) {
  const { id } = await params
  return (
    <main className="flex flex-col min-h-screen">
      <NetworkDetails id={id} />
    </main>
  )
}
