import React from "react";
import styled from "styled-components/macro";
import { foods } from "../Data/FoodData";
import { Title } from "../Styles/title.js";
import { FoodCard, FoodGrid } from "./FoodGrid";

const MenuStyled = styled.div`
  margin: 0 400px 50px 20px;
`;

const MenuTitle = styled(Title)`
  font-size: 28px;
  margin: 10px 0 20px;
`;

export function Menu({ setActiveItem }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([section, foods], ii) => (
        <div key={ii}>
          <MenuTitle>{section}</MenuTitle>
          <FoodGrid>
            {foods.map((item, i) => {
              return (
                <FoodCard
                  key={i}
                  item={item}
                  setActiveItem={setActiveItem}
                ></FoodCard>
              );
            })}
          </FoodGrid>
        </div>
      ))}
    </MenuStyled>
  );
}
