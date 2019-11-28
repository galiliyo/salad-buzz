import { useState, useEffect } from "react";

export function useDialogShadow({
  activeItem,
  orderVisible,
  orderDialogVisible
}) {
  const [dialogShadow, setDialogShadow] = useState(false);

  useEffect(() => {
    console.log('orderDialogVisible',orderDialogVisible);

    setDialogShadow(activeItem || orderVisible || orderDialogVisible);
  });

  return { dialogShadow, setDialogShadow };
}
