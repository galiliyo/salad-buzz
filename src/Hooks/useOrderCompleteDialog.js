import { useState } from "react";

export function useOrderCompleteDialog() {
  const [orderDialogVisible, setOrderCompleteDialogVisible] = useState(false);

  function toggleOrderCompleteDialog() {
    setOrderCompleteDialogVisible(!orderDialogVisible);
  }

  return { orderDialogVisible, toggleOrderCompleteDialog };
}
