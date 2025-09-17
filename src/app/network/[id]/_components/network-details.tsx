"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { useState } from "react"
import { LoadingSpinner } from "@/components/shared/loading"
import { Badge } from "@/components/ui/badge"
import { useNetwork } from "@/hooks/useNetwork"
import { StationsList } from "./stations-list"
import { Tabs } from "./tabs"

const StationsMap = dynamic(
  () => import("./stations-map").then((mod) => mod.StationsMap),
  {
    ssr: false,
  },
)

export function NetworkDetails({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<"list" | "map">("list")
  const { data, isLoading, error } = useNetwork(id)

  if (error)
    return (
      <p className="text-accent text-sm text-center">
        Falha ao buscar as redes
      </p>
    )
  if (isLoading) return <LoadingSpinner />

  const totalStations = data?.stations?.length
  const activeStations = data?.stations?.filter((station) => {
    const totalSlots = station.free_bikes + station.empty_slots
    return totalSlots > 0
  }).length
  const totalBikes = data?.stations?.reduce(
    (sum, station) => sum + station.free_bikes,
    0,
  )
  const totalSlots = data?.stations?.reduce(
    (sum, station) => sum + station.empty_slots + station.free_bikes,
    0,
  )

  return (
    <div className="flex flex-col space-y-6 px-6 sm:px-8 py-6">
      <nav className="flex items-center gap-2 py-2 text-muted-foreground text-sm">
        <Link
          className="hover:text-primary focus:text-primary transition-colors duration-300"
          href="/"
        >
          Início
        </Link>
        <span>/</span>
        <span className="text-foreground capitalize">{data?.name}</span>
      </nav>

      <section className="space-y-6">
        <div className="flex max-sm:flex-col justify-between gap-4">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl md:text-4xl text-balance">
              {data?.name}
            </h1>
            <p className="text-lg">
              {data?.location.city} •{" "}
              {data?.company?.join(", ") || "Operadora não informada"}
            </p>
          </div>
          <Badge className="bg-primary" pulse>
            Dados em tempo real
          </Badge>
        </div>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 *:bg-card *:p-4 *:border *:border-border *:rounded-xl *:text-center">
          <div>
            <p className="font-bold text-primary! text-2xl">{totalStations}</p>
            <p className="text-sm">Estações</p>
          </div>
          <div>
            <p className="font-bold text-secondary! text-2xl">
              {activeStations}
            </p>
            <p className="text-sm">Ativas</p>
          </div>
          <div>
            <p className="font-bold text-accent! text-2xl">{totalBikes}</p>
            <p className="text-sm">Bikes disponíveis</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{totalSlots}</p>
            <p className="text-sm">Total de vagas</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex max-sm:flex-col justify-between sm:items-center gap-4">
          <h2 className="font-bold text-2xl">Estações</h2>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Badge className="bg-bike-available">Disponível</Badge>
            <Badge className="bg-bike-full">Lotada</Badge>
            <Badge className="bg-bike-offline">Offline</Badge>
          </div>
        </div>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "list" && (
          <StationsList stations={data?.stations ?? []} />
        )}
        {activeTab === "map" && (
          <StationsMap
            location={[
              data?.location.latitude ?? 0,
              data?.location.longitude ?? 0,
            ]}
            stations={data?.stations ?? []}
          />
        )}
      </section>
    </div>
  )
}
