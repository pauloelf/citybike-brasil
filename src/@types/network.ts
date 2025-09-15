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
}
