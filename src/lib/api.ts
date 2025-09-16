import type { Network, Station } from "@/@types/network"
import api from "./axios"

export const fetchNetworks = async () => {
  const response = await api.get("/v2/networks")
  const brazilianNetworks: Network[] = response.data.networks
    .filter((network: Network) => network.location?.country === "BR")
    .sort((a: Network, b: Network) =>
      a.location.city.localeCompare(b.location.city, "pt-BR", {
        sensitivity: "base",
      }),
    )
  return brazilianNetworks
}

export const fetchNetwork = async (id: string) => {
  const response = await api.get(`/v2/networks/${encodeURIComponent(id)}`)
  const network: Network = response.data.network
  return network
}
