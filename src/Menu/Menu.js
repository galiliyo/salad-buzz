import React from "react"
import styled from "styled-components"
import { foods } from "../Data/FoodData"
import { Food, FoodGrid } from "./FoodGrid"

const MenuStyled = styled.div`
height: 1000px
Margin: 0 400px 50px 20px`

export function Menu() {
  return (
    <MenuStyled>
      <FoodGrid>
        {foods.map((item, i) => {
          return (
            <Food img={item.img} key={i}>
              <img src={item.img} style={{ width: "100%" }} />
            </Food>
          )
        })}
      </FoodGrid>
    </MenuStyled>
  )
}
