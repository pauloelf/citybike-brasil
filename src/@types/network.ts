export type Network = {
  id: string
  name: string
  location: {
    city: string
    country: string
    latitude: number
    longitude: number
  }
  company: string[]
  href: string
  gbfs_href?: string
  stations?: Station[]
}

export type Station = {
  id: string
  name: string
  latitude: number
  longitude: number
  timestamp: string
  free_bikes: number
  empty_slots: number
  extra: {
    uid: string
    renting: number
    returning: number
    last_updated: number
    address: string
    has_ebikes: boolean
    ebikes: number
    normal_bikes: number
    payment: string[]
    "payment-terminal": boolean
    altitude: null | number
    slot: number
    rental_uris: Record<string, unknown>
    virtual: boolean
  }
}

export type StationStatus = "available" | "full" | "offline"
