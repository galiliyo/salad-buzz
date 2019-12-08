import { useState } from "react";

export function useOrderCompleteDialog() {
  const [orderDialogVisible, setOrderCompleteDialogVisible] = useState(false);

  function showOrderCompleteDialog() {
    setTimeout(setOrderCompleteDialogVisible, 500, true);
    setTimeout(setOrderCompleteDialogVisible, 2.5 * 1000, false);
  }

  return {
    orderDialogVisible,
    showOrderCompleteDialog: showOrderCompleteDialog
  };
}
