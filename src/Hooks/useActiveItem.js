import { useState, useEffect } from "react";

export function useActiveItem() {
  const [activeItem, setActiveItem] = useState();
  const [foodDialogVisible, setFoodDialogVisible] = useState(!!activeItem);

  useEffect(() => {
    setFoodDialogVisible(!!activeItem);
    console.log("useEffect", foodDialogVisible);
  });

  return {
    activeItem,
    setActiveItem,
    foodDialogVisible
  };
}
