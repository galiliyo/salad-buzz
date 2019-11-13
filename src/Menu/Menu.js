import React from "react"
import styled from "styled-components/macro"
import { foods } from "../Data/FoodData"
import { Title } from "../Styles/title.js"
import { FoodCard, FoodGrid } from "./FoodGrid"


const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`

const MenuTitle = styled(Title)`
  font-size: 28px;
  margin: 10px 0 20px;
`

export function Menu({ setActiveItem }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([section, foods], ii) => (
        <>
          <MenuTitle key={section + ii}>{section}</MenuTitle>
          <FoodGrid key={ii}>
            {foods.map((item, i) => {
              return (
                <FoodCard
                  item={item}
                  setActiveItem={setActiveItem}
                  key={item.name}></FoodCard>
              )
            })}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}
