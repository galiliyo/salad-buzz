import React from "react";
import { useEffect } from "react";

export function useTitle({ activeItem, orders }) {
  useEffect(() => {
    if (activeItem) {
      document.title = activeItem.name;
    } else {
      document.title = "What's for dinner?";
    }
  });
}
