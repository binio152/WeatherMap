import Card from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";

const CurrentSkeleton = () => {
  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center justify-center gap-5 sm:gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="h-16 w-40" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-7 w-28" />
      </div>

      <div className="flex w-full justify-center rounded-2xl border border-border/60 bg-muted/25 px-4 py-4">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <p className="text-center text-lg text-muted-foreground sm:text-3xl">
            Local Time:
          </p>
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl bg-muted/35 p-4">
          <p className="text-muted-foreground">Feels like:</p>
          <Skeleton className="h-6 w-16" />
        </div>

        <div className="rounded-2xl bg-muted/35 p-4">
          <p className="text-muted-foreground">Humidity:</p>
          <Skeleton className="h-6 w-16" />
        </div>

        <div className="rounded-2xl bg-muted/35 p-4">
          <p className="text-muted-foreground">Wind Speed:</p>
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
    </Card>
  );
};

export default CurrentSkeleton;
