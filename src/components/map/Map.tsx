import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../../types";
import HideLeafletLogo from "@/components/map/HideLeafletLogo";
import MapTileLayer from "@/components/map/MapTileLayer";
import MapClick from "@/components/map/MapClick";
import MapResizeHandler from "@/components/map/MapResizeHandler";

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: Coords;
  mapType: string;
  onMapClick: (lat: number, lon: number) => void;
};

const Map = ({ coords, mapType, onMapClick }: Props) => {
  const { lat, lon } = coords;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      className="z-10 h-[38dvh] min-h-70 w-full sm:h-[44dvh] lg:h-[52dvh]"
    >
      <MapResizeHandler />
      <MapTileLayer />
      <TileLayer
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <MapClick onMapClick={onMapClick} coords={coords} />
      <HideLeafletLogo />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
};

export default Map;
