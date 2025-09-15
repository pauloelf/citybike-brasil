import { useQuery } from "@tanstack/react-query"
import { fetchNetworks } from "@/lib/api"

export function useNetworks() {
  return useQuery({
    queryKey: ["networks"],
    queryFn: fetchNetworks,
    staleTime: 1000 * 60 * 5,
  })
}
