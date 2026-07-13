import DailyForecast from "./components/weatherInfo/DailyForecast.tsx";
import HourlyForcecast from "./components/weatherInfo/HourlyForcecast..tsx";
import CurrentWeather from "./components/weatherInfo/CurrentWeather.tsx";
import AdditionalInfo from "./components/weatherInfo/AdditionalInfo.tsx";
import Map from "./components/map/Map.tsx";
import { Suspense } from "react";
import clsx from "clsx";
import MapLegend from "@/components/map/MapLegend.tsx";
import CurrentSkeleton from "@/components/skeletons/CurrentSkeleton.tsx";
import HourlySkeleton from "@/components/skeletons/HourlySkeleton.tsx";
import DailySkeleton from "@/components/skeletons/DailySkeleton.tsx";
import AdditionalSkeleton from "@/components/skeletons/AdditionalSkeleton.tsx";
import SidePanel from "@/components/sidePanel/SidePanel.tsx";
import AppControls from "@/components/app/AppControls.tsx";
import useTheme from "@/hooks/useTheme";
import useWeatherDashboard from "@/hooks/useWeatherDashboard";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const {
    coordinates,
    location,
    setLocation,
    mapType,
    setMapType,
    isSidePanelOpen,
    setIsSidePanelOpen,
    onMapClick,
  } = useWeatherDashboard();

  return (
    <>
      <div
        className={clsx(
          "mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:px-8",
          isSidePanelOpen && "xl:pr-[24rem]",
        )}
      >
        <AppControls
          location={location}
          setLocation={setLocation}
          mapType={mapType}
          setMapType={setMapType}
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/40 shadow-sm">
          <Map coords={coordinates} onMapClick={onMapClick} mapType={mapType} />
          <MapLegend mapType={mapType} />
        </div>
        <Suspense fallback={<CurrentSkeleton />}>
          <CurrentWeather coords={coordinates} />
        </Suspense>
        <Suspense fallback={<HourlySkeleton />}>
          <HourlyForcecast coords={coordinates} />
        </Suspense>
        <Suspense fallback={<DailySkeleton />}>
          <DailyForecast coords={coordinates} />
        </Suspense>
        <Suspense fallback={<AdditionalSkeleton />}>
          <AdditionalInfo coords={coordinates} />
        </Suspense>
      </div>
      <SidePanel
        coords={coordinates}
        isOpen={isSidePanelOpen}
        setIsOpen={setIsSidePanelOpen}
      />
    </>
  );
};

export default App;
