import { mapTypeData } from "./mapTypeColor.ts";

type Props = {
  mapType: string;
};

const MapLegend = ({ mapType }: Props) => {
  const data = mapTypeData[mapType];
  const range = data.stops[data.stops.length - 1].value;
  const gradientStop = data.stops
    .map((stop) => `${stop.color} ${(stop.value / range) * 100}%`)
    .join(", ");

  return (
    <div className="absolute right-3 bottom-3 z-100 flex w-auto max-w-[calc(100%-1.5rem)] flex-col gap-3 rounded-xl border border-accent/70 bg-background/80 p-3 shadow-lg backdrop-blur-sm sm:w-80 sm:max-w-sm xl:top-4 xl:right-4 xl:bottom-auto">
      <h3 className="text-sm font-semibold text-foreground">{data.title}</h3>
      <div
        style={{ background: `linear-gradient(to right, ${gradientStop})` }}
        className="h-4 w-full rounded-xl border border-accent/70 sm:h-6"
      ></div>
      <div className="flex justify-between text-[11px] text-foreground sm:text-xs">
        <span>
          {data.stops[0].value} {data.unit}
        </span>
        <span>
          {data.stops[data.stops.length - 1].value} {data.unit}
        </span>
      </div>
    </div>
  );
};

export default MapLegend;
