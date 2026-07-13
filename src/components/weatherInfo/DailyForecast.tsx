import Card from "../ui/Card";
import WeatherIcon from "./WeatherIcon";
import type { Coords } from "../../types";
import { formatWeatherApiResponse } from "@/lib/formatWeatherApiResponse";
import useWeatherQuery from "@/hooks/useWeatherQuery.ts";

type Props = { coords: Coords };

const DailyForecast = ({ coords }: Props) => {
  const { data } = useWeatherQuery({ coords });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div
            key={day.dt}
            className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/25 px-4 py-4 sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-2"
          >
            <div className="flex items-center gap-4">
              <p className="w-12 text-sm font-medium sm:w-14 sm:text-base">
                {formatWeatherApiResponse({ value: "daily", number: day.dt })}
              </p>
              <WeatherIcon src={day.weather[0].icon} />
              <p className="font-medium">
                {formatWeatherApiResponse({
                  value: "FtoC",
                  number: day?.temp.day,
                })}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 text-sm sm:ml-auto sm:flex sm:w-auto sm:items-center sm:gap-2 sm:text-base">
              <div className="flex items-center gap-2 rounded-full bg-background/80 px-2.5 py-1 text-muted-foreground">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-sky-600 sm:text-[11px]">
                  Low
                </span>
                <span className="font-medium text-foreground/85">
                  {formatWeatherApiResponse({
                    value: "FtoC",
                    number: day?.temp.min,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-background/80 px-2.5 py-1 text-muted-foreground">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-rose-600 sm:text-[11px]">
                  High
                </span>
                <span className="font-medium text-foreground/85">
                  {formatWeatherApiResponse({
                    value: "FtoC",
                    number: day?.temp.max,
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DailyForecast;
