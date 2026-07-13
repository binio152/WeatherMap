import Card from "../ui/Card.tsx";
import WeatherIcon from "./WeatherIcon.tsx";
import type { Coords } from "../../types.ts";
import { formatWeatherApiResponse } from "@/lib/formatWeatherApiResponse.ts";
import useWeatherQuery from "@/hooks/useWeatherQuery.ts";

type Props = { coords: Coords };

const CurrentWeather = ({ coords }: Props) => {
  const { data } = useWeatherQuery({ coords });

  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center justify-center gap-5 sm:gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h2 className="text-center text-4xl font-bold sm:text-6xl">
          {(((data?.current.temp - 32) * 5) / 9).toFixed(1)}°C
        </h2>
        <WeatherIcon src={data?.current.weather[0].icon} className="size-14" />
        <p className="text-center text-lg capitalize sm:text-xl">
          {data?.current.weather[0].description}
        </p>
      </div>

      <div className="flex w-full justify-center rounded-2xl border border-border/60 bg-muted/25 px-4 py-4">
        <div className="flex flex-col items-center gap-1.5 text-center font-semibold sm:flex-row sm:gap-4">
          <p className="text-lg text-muted-foreground sm:text-3xl">
            Local Time:
          </p>
          <p className="text-2xl sm:text-3xl">
            {formatWeatherApiResponse({
              value: "hourly",
              number: data?.current.dt,
            })}
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl bg-muted/35 p-4 text-center sm:text-left">
          <p className="text-muted-foreground">Feels like:</p>
          <p>
            {formatWeatherApiResponse({
              value: "FtoC",
              number: data?.current.feels_like,
            })}
          </p>
        </div>

        <div className="rounded-2xl bg-muted/35 p-4 text-center sm:text-left">
          <p className="text-muted-foreground">Humidity:</p>
          <p>
            {formatWeatherApiResponse({
              value: "humidity",
              number: data?.current.humidity,
            })}
          </p>
        </div>

        <div className="rounded-2xl bg-muted/35 p-4 text-center sm:text-left">
          <p className="text-muted-foreground">Wind Speed:</p>
          <p>
            {formatWeatherApiResponse({
              value: "wind_speed",
              number: data?.current.wind_speed,
            })}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
