import Card from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";

const AirPollutionSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Air Pollution</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-semibold">AQI</h2>
          <Skeleton className="size-5 rounded-full" />
        </div>
        <Skeleton className="h-10 w-12 rounded-lg" />
      </div>

      {Array.from({ length: 8 }).map((_, idx) => (
        <Card
          key={idx}
          className="cursor-default from-sidebar-accent to-sidebar-accent/60"
          childrenClassName="flex flex-col gap-4"
        >
          <Skeleton className="h-32 w-full rounded-2xl" />
        </Card>
      ))}
    </div>
  );
};

export default AirPollutionSkeleton;
