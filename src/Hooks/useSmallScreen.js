import { useState, useEffect } from "react";

const BREAK_POINT = 1354;

export function useSmallScreen() {
  const [isSmallScreen, setSmallScreen] = useState(
    window.innerWidth < BREAK_POINT
  );

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const updateScreenSize = () => {
    setSmallScreen(window.innerWidth < BREAK_POINT);
  };

  return { isSmallScreen, setSmallScreen, updateScreenSize };
}
