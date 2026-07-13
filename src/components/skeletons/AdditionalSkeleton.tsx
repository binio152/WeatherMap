import Card from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";

const AdditionalSkeleton = () => {
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-4"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-muted/25 px-4 py-4"
          key={index}
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-5 w-28" />
          </div>
          <Skeleton className="h-5 w-16" />
        </div>
      ))}
    </Card>
  );
};

export default AdditionalSkeleton;
