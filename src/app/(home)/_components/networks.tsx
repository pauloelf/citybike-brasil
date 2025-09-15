"use client"

import { Suspense } from "react"
import type { Network } from "@/@types/network"
import { LoadingSpinner } from "@/components/shared/loading"
import { useNetworks } from "@/hooks/useNetworks"
import { NetworkCard } from "./network-card"

export function Networks() {
  const { data, isLoading, error } = useNetworks()

  return (
    <section className="flex flex-col space-y-6 px-6 sm:px-8 py-6">
      <div className="flex max-sm:flex-col justify-between sm:items-center gap-2">
        <h2 className="font-bold text-3xl">Redes disponíveis</h2>
        <span className="text-muted-foreground text-sm">
          Atualizado em tempo real
        </span>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((network: Network) => (
              <li key={network.id}>
                <NetworkCard network={network} />
              </li>
            ))}
          </ul>
        )}
      </Suspense>
      {error && (
        <p className="text-accent text-sm text-center">
          Falha ao buscar as redes
        </p>
      )}
    </section>
  )
}
