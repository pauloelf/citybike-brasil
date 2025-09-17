"use client"

import { useState } from "react"
import type { Station, StationStatus } from "@/@types/network"
import { ButtonFilter } from "@/components/ui/button-filter"
import { getStationStatus } from "@/lib/utils"
import { StationCard } from "./station-card"

interface StationsListProps {
  stations: Station[]
}

export function StationsList({ stations }: StationsListProps) {
  const [filter, setFilter] = useState<"all" | StationStatus>("all")
  const [sortBy, setSortBy] = useState<"name" | "bikes" | "slots">("name")

  const filteredStations = stations.filter((station) => {
    if (filter === "all") return true
    const status = getStationStatus(station.free_bikes, station.empty_slots)
    return status === filter
  })

  const sortedStations = [...filteredStations].sort((a, b) => {
    const aValue = a.name.split("- ")[1] || a.name
    const bValue = b.name.split("- ")[1] || b.name

    switch (sortBy) {
      case "bikes":
        return b.free_bikes - a.free_bikes
      case "slots":
        return b.empty_slots - a.empty_slots
      default:
        return aValue.localeCompare(bValue)
    }
  })

  return (
    <div className="space-y-6 pt-6">
      <div className="flex sm:flex-row flex-col justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <ButtonFilter
            activeCurrent="all"
            filter={filter}
            setFilter={setFilter}
          >
            Todas ({stations.length})
          </ButtonFilter>
          <ButtonFilter
            activeCurrent="available"
            filter={filter}
            setFilter={setFilter}
          >
            Disponíveis (
            {
              stations.filter(
                (s) =>
                  getStationStatus(s.free_bikes, s.empty_slots) === "available",
              ).length
            }
            )
          </ButtonFilter>
          <ButtonFilter
            activeCurrent="full"
            filter={filter}
            setFilter={setFilter}
          >
            Lotadas (
            {
              stations.filter(
                (s) => getStationStatus(s.free_bikes, s.empty_slots) === "full",
              ).length
            }
            )
          </ButtonFilter>
          <ButtonFilter
            activeCurrent="offline"
            filter={filter}
            setFilter={setFilter}
          >
            Offline (
            {
              stations.filter(
                (s) =>
                  getStationStatus(s.free_bikes, s.empty_slots) === "offline",
              ).length
            }
            )
          </ButtonFilter>
        </div>

        <select
          className="bg-background px-3 py-1 border border-border rounded-md text-foreground text-sm"
          onChange={(e) =>
            setSortBy(e.target.value as "name" | "bikes" | "slots")
          }
          value={sortBy}
        >
          <option value="name">Ordenar por nome</option>
          <option value="bikes">Ordenar por bikes disponíveis</option>
          <option value="slots">Ordenar por vagas livres</option>
        </select>
      </div>

      {sortedStations.length === 0 ? (
        <div className="py-12 text-muted-foreground text-center">
          Nenhuma estação encontrada com os filtros selecionados.
        </div>
      ) : (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sortedStations.map((station) => (
            <div key={station.id}>
              <StationCard station={station} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
