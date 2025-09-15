import { Badge } from "@/components/ui/badge"

export function HomeHero() {
  return (
    <section className="items-center gap-6 grid grid-cols-1 md:grid-cols-3 px-6 sm:px-8 pt-8 sm:pt-12 md:pt-16 pb-4">
      <div className="space-y-6 col-span-2">
        <h1 className="max-w-3xl font-bold text-4xl md:text-6xl text-balance leading-tight">
          <span className="text-primary">Bicicletas</span> compartilhadas{" "}
          <span className="text-secondary">em todo o Brasil</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-pretty">
          Encontre estações de bicicletas compartilhadas nas principais cidades
          brasileiras. Mobilidade sustentável ao seu alcance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Badge className="bg-primary">Tempo real</Badge>
          <Badge className="bg-secondary">Dados oficiais</Badge>
          <Badge className="bg-accent">Gratuito</Badge>
        </div>
      </div>
      <div className="justify-self-center md:justify-self-end space-y-4 bg-card shadow p-6 border border-border rounded-xl w-max h-max">
        <p className="font-semibold">Brasil em movimento</p>
        <div className="flex justify-center gap-6 *:grid *:text-muted-foreground! *:text-sm *:text-center">
          <span>
            <strong className="text-primary text-2xl">12+</strong>Cidades
          </span>
          <span>
            <strong className="text-secondary text-2xl">500+</strong>Estações
          </span>
        </div>
      </div>
    </section>
  )
}
