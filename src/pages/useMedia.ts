import { useEffect, useState } from "react";

export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
) {
  const isClient = typeof window === "object"; // Check if we are on the client-side

  const match = () => {
    if (!isClient) return defaultValue; // Return default value during server-side rendering

    const matchedIndex = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[matchedIndex] || defaultValue;
  };

  const [value, set] = useState(match);

  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return value;
}
