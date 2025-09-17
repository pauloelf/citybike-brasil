"use client"

import type { Station } from "@/@types/network"
import { formatLastUpdate, getStationStatus } from "@/lib/utils"

interface StationCardProps {
  station: Station
}

export function StationCard({ station }: StationCardProps) {
  const status = getStationStatus(station.free_bikes, station.empty_slots)
  const lastUpdate = formatLastUpdate(station.extra.last_updated * 1000)

  const getStatusColor = () => {
    switch (status) {
      case "available":
        return "var(--bike-available)"
      case "full":
        return "var(--bike-full)"
      case "offline":
        return "var(--bike-offline)"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "available":
        return "Disponível"
      case "full":
        return "Lotada"
      case "offline":
        return "Offline"
    }
  }

  return (
    <article className="space-y-3 bg-card hover:shadow-md p-4 border border-border rounded-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm truncate leading-tight">
            {station.name}
          </h3>
          {station.extra?.address && (
            <p className="mt-1 text-xs truncate">{station.extra.address}</p>
          )}
        </div>
        <div
          className="flex-shrink-0 mt-0.5 ml-2 rounded-full w-3 h-3"
          style={{ backgroundColor: getStatusColor() }}
        ></div>
      </div>

      <div className="gap-3 grid grid-cols-2">
        <div className="text-center">
          <div className="font-bold text-primary text-lg">
            {station.free_bikes}
          </div>
          <p className="text-xs">Bikes</p>
        </div>
        <div className="text-center">
          <div className="font-bold text-secondary text-lg">
            {station.empty_slots}
          </div>
          <p className="text-xs">Vagas</p>
        </div>
      </div>

      <div className="pt-2 border-t border-border">
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium" style={{ color: getStatusColor() }}>
            {getStatusText()}
          </span>
          <span className="text-muted-foreground">{lastUpdate}</span>
        </div>
      </div>
    </article>
  )
}
