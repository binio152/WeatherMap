import Card from "../ui/Card.tsx";
import cloudIcon from "/src/assets/cloud.svg?react";
import pressureIcon from "/src/assets//pressure.svg?react";
import sunriseIcon from "/src/assets//sunrise.svg?react";
import sunsetIcon from "/src/assets//sunset.svg?react";
import uvIndexIcon from "/src/assets//uv_index.svg?react";
import windDirectionIcon from "/src/assets//wind_direction.svg?react";
import type { Coords } from "../../types.ts";
import { formatWeatherApiResponse } from "@/lib/formatWeatherApiResponse.ts";
import useWeatherQuery from "@/hooks/useWeatherQuery.ts";

type Props = { coords: Coords };

const AdditionalInfo = ({ coords }: Props) => {
  const { data } = useWeatherQuery({ coords });

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-4"
    >
      {rows.map(({ label, value, Icon }) => (
        <div
          className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/25 px-4 py-4"
          key={value}
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Icon className="size-7 shrink-0 dark:invert sm:size-8" />
            <span className="text-sm text-muted-foreground sm:text-base">
              {label}
            </span>
          </div>
          <span className="text-right text-sm font-medium sm:text-base">
            {formatWeatherApiResponse({
              value: value,
              number: data?.current[value],
            })}
          </span>
        </div>
      ))}
    </Card>
  );
};

const rows = [
  {
    label: "Cloudiness",
    value: "clouds",
    Icon: cloudIcon,
  },
  {
    label: "UV Index",
    value: "uvi",
    Icon: uvIndexIcon,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    Icon: windDirectionIcon,
  },
  {
    label: "Pressure",
    value: "pressure",
    Icon: pressureIcon,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    Icon: sunriseIcon,
  },
  {
    label: "Sunset",
    value: "sunset",
    Icon: sunsetIcon,
  },
] as const;

export default AdditionalInfo;
