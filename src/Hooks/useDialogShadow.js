import { useState, useEffect } from "react";

export function useDialogShadow({ activeItem, orderVisible }) {
  const [dialogShadow, setDialogShadow] = useState(false);

  useEffect(() => {
    setDialogShadow(activeItem || orderVisible);
  });

  return { dialogShadow, setDialogShadow };
}
