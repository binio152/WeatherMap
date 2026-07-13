import { useEffect } from "react";
import { useMap } from "react-leaflet";

const HideLeafletLogo = () => {
  const map = useMap();
  useEffect(() => {
    map.attributionControl.remove();
  }, [map]);

  return null;
};

export default HideLeafletLogo;
