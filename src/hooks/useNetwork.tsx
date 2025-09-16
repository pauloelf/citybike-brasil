import { useQuery } from "@tanstack/react-query"
import { fetchNetwork } from "@/lib/api"

export function useNetwork(id: string) {
  return useQuery({
    queryKey: ["network", id],
    queryFn: () => fetchNetwork(id),
    staleTime: 1000 * 60 * 5,
  })
}
