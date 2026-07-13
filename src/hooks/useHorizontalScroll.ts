import { useRef } from "react";

const useHorizontalScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const amount = Math.max(container.clientWidth * 0.75, 240);

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return { scrollContainerRef, handleScroll };
};

export default useHorizontalScroll;
