import { useState } from "react";

export function useQty(defaultQty) {
  const [value, setValue] = useState(defaultQty || 1);

  function onChange(e) {
    if (+e.target.value >= 1) setValue(+e.target.value);
    else setValue(1);
    return;
  }
  return { value, setValue, onChange };
}
