import styled from "styled-components"
import React from "react"
import { Title } from "../Styles/title"

export const FoodGrid = styled.div`
  display: grid;
  width: 100%;
  padding-top: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`

const CardTitle = styled(Title)`
  font-size: 16px;
  color: #668;
`

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 10px 10px 40px 10px;
  transition: all 0.2s
  :hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.55);
  }
`

export const FoodCard = ({ item }) => {
  return (
    <div>
      <Card>
        <img src={item.img} style={{ width: "100%" }} />
        <CardTitle>{item.name}</CardTitle>
      </Card>
    </div>
  )
}
