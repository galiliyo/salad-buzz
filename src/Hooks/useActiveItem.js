import { useState, useEffect } from "react";

export function useActiveItem() {
  const [activeItem, setActiveItem] = useState();
  const [foodDialogVisible, setFoodDialogVisible] = useState(!!activeItem);

 
  return {
    activeItem,
    setActiveItem,
    foodDialogVisible,
    setFoodDialogVisible
  };
}
