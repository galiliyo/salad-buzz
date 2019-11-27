import React from "react";

export function Choices({ activeItem, choiceRadio }) {
  return (
    <>
      {activeItem.choices.map(choice => (
        <div key={choice}>
          <input
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
    </>
  );
}
