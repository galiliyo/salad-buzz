import React from "react";
import styled from "styled-components/macro";
import { foods } from "../Data/FoodData";
import { Title } from "../Styles/title.js";
import { FoodCard, FoodGrid } from "./FoodGrid";

const MenuStyled = styled.div`
  /* transition: all 0.3;
  width: ${props =>
    props.visible ? `${window.innerWidth - 380}px` : `${window.innerWidth}px`}; */
  max-width: 1200px;
  padding: 0px 300px 24px 24px;
  margin: -40px auto;
  /* margin: ${props => (props.visible ? `-40px 20px` : `-40px auto`)}; */

  @media (max-width: 1354px) {
    padding: 0 24px 40px;

  }
`;

const MenuTitle = styled(Title)`
  font-size: 28px;
  margin: 30px 0 0px;
`;

export function Menu({ setActiveItem, orderVisible }) {
  return (
    <MenuStyled visible={orderVisible}>
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
