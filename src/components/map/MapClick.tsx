import type { Coords } from "@/types";
import { useMap } from "react-leaflet";

type Props = {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
};

const MapClick = ({ onMapClick, coords }: Props) => {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  });

  return null;
};

export default MapClick;
