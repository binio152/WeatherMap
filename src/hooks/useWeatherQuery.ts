import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeatherFromApi } from "@/lib/api.ts";
import type { Coords } from "@/types.ts";

type Props = { coords: Coords };

const useWeatherQuery = ({ coords }: Props) => {
  return useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () =>
      getWeatherFromApi({
        lat: coords.lat,
        lon: coords.lon,
        part: "minutely,alerts",
        units: "imperial",
      }),
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export default useWeatherQuery;
