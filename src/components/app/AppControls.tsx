import type { Dispatch, SetStateAction } from "react";
import LocationDropdown from "@/components/dropdown/LocationDropdown.tsx";
import MapTypeDropdown from "@/components/dropdown/MapTypeDropdown.tsx";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const AppControls = ({
  location,
  setLocation,
  mapType,
  setMapType,
  isDarkMode,
  onToggleTheme,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 pt-10 sm:flex-row sm:flex-wrap sm:items-end sm:gap-4">
      <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-64">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:text-base">
          Location
        </h1>
        <LocationDropdown location={location} setLocation={setLocation} />
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-56">
        <h1 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:text-base">
          Map Type
        </h1>
        <MapTypeDropdown mapType={mapType} setMapType={setMapType} />
      </div>

      <div className="flex w-full justify-end sm:ml-auto sm:w-auto">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Light mode" : "Dark mode"}
          onClick={onToggleTheme}
          className="border-border/70 bg-card/80 backdrop-blur-sm"
        >
          {isDarkMode ? (
            <Sun className="size-5" strokeWidth={2} />
          ) : (
            <Moon className="size-5" strokeWidth={2} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default AppControls;
