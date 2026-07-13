import Card from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";

const HourlySkeleton = () => {
  return (
    <Card childrenClassName="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <Skeleton className="h-8 w-44 rounded-lg" />
        <div className="flex items-center gap-2">
          <Skeleton className="size-7 rounded-lg" />
          <Skeleton className="size-7 rounded-lg" />
        </div>
      </div>

      <div className="scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-gutter:stable]">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="flex shrink-0 snap-start flex-col items-center justify-center gap-2.5 rounded-2xl bg-muted/35 px-4 py-3"
          >
            <Skeleton className="h-6 w-14" />
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="h-6 w-12" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HourlySkeleton;
