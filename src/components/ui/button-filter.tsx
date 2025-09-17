import type { ReactNode } from "react"
import type { StationStatus } from "@/@types/network"

interface ButtonFilterProps {
  activeCurrent: "all" | StationStatus
  filter: "all" | StationStatus
  setFilter: (filter: "all" | StationStatus) => void
  children: ReactNode
}

export function ButtonFilter({
  filter,
  setFilter,
  activeCurrent,
  children,
}: ButtonFilterProps) {
  return (
    <button
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
        filter === activeCurrent
          ? "bg-primary text-white"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      }`}
      onClick={() => setFilter(activeCurrent)}
      type="button"
    >
      {children}
    </button>
  )
}
