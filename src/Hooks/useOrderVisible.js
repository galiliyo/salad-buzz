import { useState } from "react";

export function useOrderVisible() {
  const [orderVisible, setOrderVisible] = useState(false);

  return { orderVisible, setOrderVisible };
}
