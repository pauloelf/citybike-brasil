"use client"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import type { Station } from "@/@types/network"
import "leaflet/dist/leaflet.css"
import { Icon, type LatLngExpression } from "leaflet"
import { getStationStatus, getStatusColor, getStatusText } from "@/lib/utils"

interface StationsMapProps {
  stations: Station[]
  location: LatLngExpression
}

const iconAvailable = new Icon({
  iconUrl: "/icons/blue-marker.png",
  iconSize: [32, 32],
})
const iconOffline = new Icon({
  iconUrl: "/icons/gray-marker.png",
  iconSize: [32, 32],
})
const iconFull = new Icon({
  iconUrl: "/icons/red-marker.png",
  iconSize: [32, 32],
})

export function StationsMap({ stations, location }: StationsMapProps) {
  return (
    <div className="py-6 overflow-hidden">
      <MapContainer center={location} className="space-y-6 pt-6" zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="text-center"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stations.map((station) => {
          const status = getStationStatus(
            station.free_bikes,
            station.empty_slots,
          )
          const icon =
            status === "available"
              ? iconAvailable
              : status === "full"
                ? iconFull
                : iconOffline

          return (
            <Marker
              icon={icon}
              key={station.id}
              position={[station.latitude, station.longitude]}
            >
              <Popup>
                {station.name} |{" "}
                <span style={{ color: getStatusColor(status) }}>
                  {getStatusText(status)}
                </span>{" "}
                <br /> {station.extra.address}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
