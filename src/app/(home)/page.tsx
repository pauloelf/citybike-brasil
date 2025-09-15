import { HomeHero } from "./_components/home-hero"
import { Networks } from "./_components/networks"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <Networks />
    </main>
  )
}
