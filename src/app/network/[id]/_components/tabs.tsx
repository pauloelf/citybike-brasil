"use client"

interface TabsProps {
  activeTab: "list" | "map"
  setActiveTab: (tab: "list" | "map") => void
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex gap-2 pt-6 border-b border-border">
      <button
        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ${
          activeTab === "list"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => setActiveTab("list")}
        type="button"
      >
        Lista
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ${
          activeTab === "map"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => setActiveTab("map")}
        type="button"
      >
        Mapa
      </button>
    </div>
  )
}
