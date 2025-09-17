"use client"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import type { Station } from "@/@types/network"
import "leaflet/dist/leaflet.css"
import { Icon, type LatLngExpression } from "leaflet"

interface StationsMapProps {
  stations: Station[]
  location: LatLngExpression
}

const icon = new Icon({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

export function StationsMap({ stations, location }: StationsMapProps) {
  return (
    <div className="py-6 overflow-hidden">
      <MapContainer center={location} className="space-y-6 pt-6" zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station) => (
          <Marker
            icon={icon}
            key={station.id}
            position={[station.latitude, station.longitude]}
          >
            <Popup>
              {station.name} <br /> {station.extra.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
