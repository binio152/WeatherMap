import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGeocodeFromApi } from "@/lib/api.ts";
import type { Coords } from "@/types.ts";

const DEFAULT_COORDS: Coords = { lat: 10.9, lon: 106 };
const DEFAULT_MAP_TYPE = "clouds_new";

const getInitialSidePanelState = () => {
  if (typeof window === "undefined") return false;

  return window.innerWidth >= 1280;
};

const useWeatherDashboard = () => {
  const [coordinates, setCoords] = useState<Coords>(DEFAULT_COORDS);
  const [location, setLocation] = useState("");
  const [mapType, setMapType] = useState(DEFAULT_MAP_TYPE);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(
    getInitialSidePanelState,
  );

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocodeFromApi(location),
    enabled: location !== "",
    retry: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!geocodeData || location === "") {
      return;
    }

    setCoords({ lat: geocodeData.lat, lon: geocodeData.lon });
  }, [geocodeData, location]);

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("");
  };

  return {
    coordinates,
    location,
    setLocation,
    mapType,
    setMapType,
    isSidePanelOpen,
    setIsSidePanelOpen,
    onMapClick,
  };
};

export default useWeatherDashboard;
