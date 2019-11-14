import { useState } from "react";
import { TOPPINGS_LIST } from "../Data/FoodData";
const getDefaultToppings = () => {
  return TOPPINGS_LIST.map(topping => {
    return { name: topping, checked: false };
  });
};
export function useToppings(defaultToppings) {
  const [toppings, setToppings] = useState(
    defaultToppings || getDefaultToppings
  );

  function checkTopping(idx) {
    const updatedToppings = [...toppings];
    updatedToppings[idx].checked = !toppings[idx].checked;
    setToppings(updatedToppings);
  }
  return {
    toppings,
    checkTopping
  };
}
