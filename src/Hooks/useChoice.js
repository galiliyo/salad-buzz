import { useState } from "react";

export function useChoice(defaultChoice) {
  const [value, setValue] = useState(defaultChoice || null);

  function onChange(e) {
    setValue(e.target.value);
  }
  return { onChange, value };
}
