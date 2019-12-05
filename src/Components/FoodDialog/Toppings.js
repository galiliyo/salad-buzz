import React from "react";
import styled from "styled-components";

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin: 10px 0 8px 0;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 32px;
  }
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
const ToppingLabel = styled.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingGrid>
      {toppings.map((topping, idx) => (
        <div key={idx}>
          <ToppingCheckbox
            type="checkbox"
            id={topping.name}
            checked={topping.checked}
            onChange={() => {
              checkTopping(idx);
            }}
          />
          <ToppingLabel htmlFor={topping.name} key={idx}>
            {topping.name}{" "}
          </ToppingLabel>
        </div>
      ))}
    </ToppingGrid>
  );
}
