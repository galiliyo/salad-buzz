import { useState, useEffect } from "react";

export function useDialogShadow({
  foodDialogVisible,
  orderVisible,
  orderDialogVisible
}) {
  const [dialogShadow, setDialogShadow] = useState(false);

  useEffect(() => {
    setDialogShadow(foodDialogVisible || orderVisible);
  }, [foodDialogVisible, orderVisible]);

  return { dialogShadow, setDialogShadow };
}
