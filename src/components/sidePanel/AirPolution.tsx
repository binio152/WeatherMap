import Card from "@/components/ui/Card";
import { Slider } from "@/components/ui/slider";
import type { AirQualityRanges, Coords, Pollutant } from "@/types";
import clsx from "clsx";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useAirPollutionQuery from "@/hooks/useAirPollutionQuery.ts";

type Props = { coords: Coords };

const AirPolution = ({ coords }: Props) => {
  const { data: airPollution } = useAirPollutionQuery({ coords });
  const pollutionComponents = Object.entries(
    airPollution.list[0].components,
  ) as [string, number][];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold ">Air Pollution</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 ">
          <h2 className="text-4xl font-semibold">AQI</h2>

          <Tooltip>
            <TooltipTrigger className="rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70">
              <Info className="size-5" strokeWidth={2.2} />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="start"
              className="max-w-72 rounded-xl border border-border/70 bg-card/95 px-4 py-3 text-foreground shadow-xl backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1.5 text-left">
                <p className="text-sm font-semibold tracking-wide text-foreground">
                  Air Quality Index
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  AQI is a standardized index used to communicate the quality of
                  air in a specific location. It provides a numerical value that
                  represents the level of air pollution, with higher values
                  indicating poorer air quality. The AQI takes into account
                  various pollutants, such as particulate matter (PM2.5 and
                  PM10), ozone (O3), nitrogen dioxide (NO2), sulfur dioxide
                  (SO2), carbon monoxide (CO), and ammonia (NH3). The AQI is
                  typically categorized into different levels, such as Good,
                  Fair, Moderate, Poor, and Very Poor, to help individuals
                  understand the potential health impacts of the air quality in
                  their area.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-4xl font-semibold ">
          {airPollution.list[0].main.aqi}
        </p>
      </div>
      {pollutionComponents.map(([key, value]) => {
        const pollutantKey = key.toLocaleUpperCase() as Pollutant;
        const pollutantLabel =
          pollutantNameMapping[pollutantKey] || pollutantKey;
        const pollutant =
          airQualityRanges[pollutantKey as keyof typeof airQualityRanges];
        const max = Math.max(pollutant["Very Poor"].min, value);

        const currentLevel = (() => {
          for (const [level, range] of Object.entries(pollutant)) {
            if (
              value >= range.min &&
              (range.max === null || value <= range?.max)
            )
              return level;
          }

          return "Very Poor";
        })();

        const qualityColor = (() => {
          switch (currentLevel) {
            case "Good":
              return "bg-green-500";
            case "Fair":
              return "bg-yellow-500";
            case "Moderate":
              return "bg-orange-500";
            case "Poor":
              return "bg-red-500";
            case "Very Poor":
              return "bg-purple-500";
            default:
              return "bg-zinc-500";
          }
        })();

        return (
          <Card
            key={key}
            className="cursor-default from-sidebar-accent to-sidebar-accent/60 transition-transform duration-300 hover:scale-[1.02]"
            childrenClassName="flex flex-col gap-4"
          >
            <div className="flex justify-between ">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">{pollutantKey}</span>
                <Tooltip>
                  <TooltipTrigger className="rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70">
                    <Info className="size-4" strokeWidth={2.2} />
                  </TooltipTrigger>
                  <TooltipContent className="rounded-lg border border-border/70 bg-card/95 px-3 py-2 text-sm text-foreground shadow-lg backdrop-blur-sm">
                    {pollutantLabel}
                  </TooltipContent>
                </Tooltip>
              </div>
              <span className="text-lg font-semibold">{value}</span>
            </div>
            <Slider disabled min={0} value={[value]} max={max} />
            <div className="flex justify-between text-xs">
              <p>0</p>
              <p>{max}</p>
            </div>
            <div className="flex justify-between items-center">
              {Object.keys(pollutant).map((quality, idx) => (
                <span
                  key={idx}
                  className={clsx(
                    "px-2 py-1 rounded-md text-xs font-medium",
                    quality === currentLevel
                      ? qualityColor
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {quality}
                </span>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

const airQualityRanges: AirQualityRanges = {
  SO2: {
    Good: { min: 0, max: 20 },
    Fair: { min: 20, max: 80 },
    Moderate: { min: 80, max: 250 },
    Poor: { min: 250, max: 350 },
    "Very Poor": { min: 350, max: null },
  },
  NO2: {
    Good: { min: 0, max: 40 },
    Fair: { min: 40, max: 70 },
    Moderate: { min: 70, max: 150 },
    Poor: { min: 150, max: 200 },
    "Very Poor": { min: 200, max: null },
  },
  PM10: {
    Good: { min: 0, max: 20 },
    Fair: { min: 20, max: 50 },
    Moderate: { min: 50, max: 100 },
    Poor: { min: 100, max: 200 },
    "Very Poor": { min: 200, max: null },
  },
  PM2_5: {
    Good: { min: 0, max: 10 },
    Fair: { min: 10, max: 25 },
    Moderate: { min: 25, max: 50 },
    Poor: { min: 50, max: 75 },
    "Very Poor": { min: 75, max: null },
  },
  O3: {
    Good: { min: 0, max: 60 },
    Fair: { min: 60, max: 100 },
    Moderate: { min: 100, max: 140 },
    Poor: { min: 140, max: 180 },
    "Very Poor": { min: 180, max: null },
  },
  CO: {
    Good: { min: 0, max: 4400 },
    Fair: { min: 4400, max: 9400 },
    Moderate: { min: 9400, max: 12400 },
    Poor: { min: 12400, max: 15400 },
    "Very Poor": { min: 15400, max: null },
  },
  NO: {
    Good: { min: 0, max: 20 },
    Fair: { min: 20, max: 40 },
    Moderate: { min: 40, max: 60 },
    Poor: { min: 60, max: 80 },
    "Very Poor": { min: 80, max: null },
  },
  NH3: {
    Good: { min: 0, max: 40 },
    Fair: { min: 40, max: 70 },
    Moderate: { min: 70, max: 150 },
    Poor: { min: 150, max: 200 },
    "Very Poor": { min: 200, max: null },
  },
};

const pollutantNameMapping: Record<Pollutant, string> = {
  SO2: "Sulfur dioxide",
  NO2: "Nitrogen dioxide",
  PM10: "Particulate matter 10",
  PM2_5: "Fine particles matter",
  O3: "Ozone",
  CO: "Carbon monoxide",
  NO: "Nitrogen monoxide",
  NH3: "Ammonia",
};

export default AirPolution;
