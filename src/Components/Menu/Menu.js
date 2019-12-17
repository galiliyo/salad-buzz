import React from "react";
import styled from "styled-components/macro";
import { foods } from "../../Data/FoodData";
import { Title } from "../../Styles/title.js";
import { FoodCard, FoodGrid } from "./FoodGrid";
// import { LeafAnimation } from "../UI/LeafAnimation";

const MenuStyled = styled.div`
  max-width: 1200px;
  padding: 0px 300px 24px 24px;
  margin: -40px auto;
  overflow-y: hidden;
  margin-bottom:20px;

  @media (max-width: 1354px) {
    padding: 0 24px 40px;
  }
`;

const MenuTitle = styled(Title)`
  font-size: 28px;
  margin: 30px 0 0px;
`;

export function Menu({ setActiveItem, setFoodDialogVisible }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([section, foods], ii) => (
        <div key={ii}>
          <MenuTitle>{section}</MenuTitle>
          <FoodGrid>
            {foods.map((item, i) => {
              return (
                <div style={{ position: "relative", display: "flex" }} key={i}>
                  {/*<LeafAnimation />*/}
                  <FoodCard
                    item={item}
                    setActiveItem={setActiveItem}
                    setFoodDialogVisible={setFoodDialogVisible}
                  ></FoodCard>
                </div>
              );
            })}
          </FoodGrid>
        </div>
      ))}
    </MenuStyled>
  );
}
