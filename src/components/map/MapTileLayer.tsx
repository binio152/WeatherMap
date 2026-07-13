import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapTileLayer = () => {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: "FwhSIVgxUqxDh1wAMAPh",
    });
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
};

export default MapTileLayer;
