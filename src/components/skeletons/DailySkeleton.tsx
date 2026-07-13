import Card from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";

const DailySkeleton = () => {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/25 px-4 py-4 sm:flex-row sm:items-center sm:gap-x-4 sm:gap-y-2"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-10" />
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-5 w-14" />
            </div>
            <div className="grid w-full grid-cols-2 gap-2 sm:ml-auto sm:flex sm:w-auto sm:items-center sm:gap-2">
              <Skeleton className="h-8 w-full rounded-full sm:w-20" />
              <Skeleton className="h-8 w-full rounded-full sm:w-20" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DailySkeleton;
