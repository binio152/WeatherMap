import Card from "../ui/Card.tsx";
import WeatherIcon from "./WeatherIcon.tsx";
import type { Coords } from "../../types.ts";
import { formatWeatherApiResponse } from "@/lib/formatWeatherApiResponse.ts";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useWeatherQuery from "@/hooks/useWeatherQuery.ts";
import useHorizontalScroll from "@/hooks/useHorizontalScroll.ts";

type Props = { coords: Coords };

const HourlyForcecast = ({ coords }: Props) => {
  const { scrollContainerRef, handleScroll } = useHorizontalScroll();
  const { data } = useWeatherQuery({ coords });

  return (
    <Card childrenClassName="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Hourly Forecast</h2>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            aria-label="Scroll hourly forecast left"
            onClick={() => handleScroll("left")}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            aria-label="Scroll hourly forecast right"
            onClick={() => handleScroll("right")}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-gutter:stable]"
      >
        {data?.hourly.slice(0, 25).map((hour) => (
          <div
            key={hour.dt}
            className="flex shrink-0 snap-start flex-col items-center justify-center gap-2.5 rounded-2xl bg-muted/35 px-4 py-3"
          >
            <h2 className="whitespace-nowrap">
              {formatWeatherApiResponse({ value: "hourly", number: hour?.dt })}
            </h2>
            <div>
              <WeatherIcon src={hour.weather[0].icon} />
            </div>
            <p>
              {formatWeatherApiResponse({ value: "FtoC", number: hour?.temp })}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HourlyForcecast;
