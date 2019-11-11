import React from "react"
import styled from "styled-components"
import { foods } from "../Data/FoodData"
import { Title } from "../Styles/title.js"
import { FoodCard, FoodGrid } from "./FoodGrid"

const MenuStyled = styled.div`
height: 1000px
Margin: 0 400px 50px 20px`

const Menu_Title = styled(Title)`
font-size:32px;
margin:10px 0 20px;`


export function Menu() {
  return (
    <MenuStyled>
      <Menu_Title>Menu</Menu_Title>
      {Object.entries(foods).map(([section, foods]) => (
        <>
        <Title>{section}</Title>
          <FoodGrid>
            {foods.map((item, i) => {
              return <FoodCard item={item} key={i}></FoodCard>
            })}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}
