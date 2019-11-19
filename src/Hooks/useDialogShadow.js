import { useState,useEffect } from "react";

export function useDialogShadow({ activeItem }) {
  const [dialogShadow, setDialogShadow] = useState(false);

  useEffect(() => {
    if (activeItem) {
      setDialogShadow(true);
    } else {
      setDialogShadow(false);
    }
  });

  return { dialogShadow, setDialogShadow };
}
