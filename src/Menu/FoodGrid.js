import styled from "styled-components/macro"
import React from "react"
import { Title } from "../Styles/title"
import {formatPrice} from "../Data/FoodData"

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
  background: white;
  transition: all 0.2s;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.55);
  }
`

export const FoodCard = ({ item, setActiveItem }) => {
  FoodCard.displayName = "Food-Card"
  return (
    <div>
      <Card
        onClick={() => {
          setActiveItem(item)
        }}>
        <img src={item.img} style={{ width: "100%" }} />
        <CardTitle>
          {item.name} <div>{formatPrice(item.price)}</div>
        </CardTitle>
      </Card>
    </div>
  )
}
