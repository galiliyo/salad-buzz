import { useState, useEffect } from "react";

export function useDialogShadow({
  foodDialogVisible,
  orderVisible,
  orderDialogVisible
}) {
  const [dialogShadow, setDialogShadow] = useState(false);

  useEffect(() => {
    setDialogShadow(foodDialogVisible || orderVisible || orderDialogVisible);
  });

  return { dialogShadow, setDialogShadow };
}
