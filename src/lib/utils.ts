import type { StationStatus } from "@/@types/network"

export function getStationStatus(freeBikes: number, emptySlots: number) {
  if (
    typeof freeBikes !== "number" ||
    typeof emptySlots !== "number" ||
    freeBikes < 0 ||
    emptySlots < 0
  ) {
    return "offline"
  }

  const totalSlots = freeBikes + emptySlots

  if (totalSlots === 0) return "offline"
  if (freeBikes === 0) return "full"
  return "available"
}

export function formatLastUpdate(timestamp: number) {
  try {
    const date = new Date(timestamp)

    if (isNaN(date.getTime())) {
      return "Data inválida"
    }

    const now = new Date()
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    )

    if (diffInMinutes < 0) {
      return "Agora mesmo"
    }

    if (diffInMinutes < 1) return "Agora mesmo"
    if (diffInMinutes < 60) return `${diffInMinutes}m atrás`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h atrás`

    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d atrás`

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
  } catch (error) {
    console.error("Error formatting timestamp:", error)
    return "Data inválida"
  }
}

export const getStatusColor = (status: StationStatus) => {
  switch (status) {
    case "available":
      return "var(--bike-available)"
    case "full":
      return "var(--bike-full)"
    case "offline":
      return "var(--bike-offline)"
  }
}

export const getStatusText = (status: StationStatus) => {
  switch (status) {
    case "available":
      return "Disponível"
    case "full":
      return "Lotada"
    case "offline":
      return "Offline"
  }
}
