import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapResizeHandler = () => {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();

    const resizeMap = () => {
      window.requestAnimationFrame(() => {
        map.invalidateSize(false);
      });
    };

    const observer = new ResizeObserver(() => {
      resizeMap();
    });

    observer.observe(container);
    resizeMap();

    return () => {
      observer.disconnect();
    };
  }, [map]);

  return null;
};

export default MapResizeHandler;
