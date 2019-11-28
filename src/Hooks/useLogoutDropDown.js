import { useState, useEffect } from "react";

export function useLogoutDropDown() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleClickOutside = e => {
   console.log("clicking anywhere", e.target.innerHTML);

    if (e.target.innerHTML !== "Logout") setOpen(false);
    return
  };

  return { open, setOpen, handleClickOutside };
}
