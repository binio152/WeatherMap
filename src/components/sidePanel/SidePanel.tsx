import { Suspense, type Dispatch, type SetStateAction } from "react";
import { type Coords } from "@/types.ts";
import AirPollution from "./AirPolution";
import AirPollutionSkeleton from "@/components/skeletons/AirPollutionSkeleton";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

type Props = {
  coords: Coords;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SidePanel = ({ coords, isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-990 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />

      <Button
        variant="secondary"
        size="icon-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close side panel" : "Open side panel"}
        className={clsx(
          "fixed top-4 z-1050 rounded-r-none border border-r-0 border-border/70 bg-sidebar/95 shadow-lg backdrop-blur-sm transition-[right,transform] duration-300 hover:bg-sidebar sm:top-6",
          isOpen
            ? "right-[min(20rem,calc(100vw-1rem))] xl:right-80"
            : "right-0",
        )}
      >
        {isOpen ? (
          <PanelRightClose className="size-5" strokeWidth={2} />
        ) : (
          <PanelRightOpen className="size-5" strokeWidth={2} />
        )}
      </Button>

      <aside
        className={clsx(
          isOpen ? "translate-x-0" : "translate-x-full",
          "sidebar-scroll fixed top-0 right-0 z-1000 flex h-screen w-[min(20rem,calc(100vw-1rem))] max-w-full flex-col overflow-y-auto overscroll-y-contain bg-sidebar px-3 py-6 shadow-md [scrollbar-gutter:stable] transition-transform duration-300 ease-out will-change-transform sm:w-80 sm:px-4 sm:py-8",
        )}
      >
        <Suspense fallback={<AirPollutionSkeleton />}>
          <AirPollution coords={coords} />
        </Suspense>
      </aside>
    </>
  );
};

export default SidePanel;
