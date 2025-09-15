import Link from "next/link"
import type { Network } from "@/@types/network"

interface NetworkCardProps {
  network: Network
}

export function NetworkCard({ network }: NetworkCardProps) {
  const companies = network.company?.join(", ") || "Não informado"
  return (
    <Link
      className="group grid bg-card shadow hover:shadow-lg p-6 border hover:border-primary/20 focus:border-primary/20 border-border rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring h-full transition-all duration-300"
      href={`/network/${network.id}`}
    >
      <article className="flex flex-col space-y-4 h-full">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold group-focus:text-primary group-hover:text-primary text-xl">
              {network.name}
            </h3>
            <p className="text-sm">{network.location.city}</p>
          </div>
          <div className="bg-primary rounded-full w-3 h-3 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide">Operadora</p>
          <p className="font-medium text-foreground text-sm">{companies}</p>
        </div>
        <div className="mt-auto pt-2 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-medium text-primary group-focus:text-primary/80 group-hover:text-primary/80 text-sm">
              Ver estações
            </span>
            <svg
              className="text-primary transition-transform group-focus:translate-x-1 group-hover:translate-x-1"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <title>Seta para a direita</title>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
