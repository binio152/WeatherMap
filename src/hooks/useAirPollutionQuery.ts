import { useSuspenseQuery } from "@tanstack/react-query";
import { getAirPollutionFromApi } from "@/lib/api.ts";
import type { Coords } from "@/types.ts";

type Props = { coords: Coords };

const useAirPollutionQuery = ({ coords }: Props) => {
  return useSuspenseQuery({
    queryKey: ["pollution", `${coords.lat}-${coords.lon}`],
    queryFn: () => getAirPollutionFromApi(coords),
  });
};

export default useAirPollutionQuery;
