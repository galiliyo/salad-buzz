import styled from "styled-components/macro";
import React from "react";
import { Title } from "../../Styles/title";
import { formatPrice } from "../../Data/FoodData";

export const FoodGrid = styled.div`
  display: grid;
  width: 100%;
  padding-top: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const CardTitle = styled(Title)`
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 12px;
  color: #668;
`;

const Card = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
  background: white;
  transition: all 0.2s;
  :hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.55);
  }
`;
const Spacer = styled.div`
  flex-grow: 100;
`;
const Price = styled.h3`
  text-align: right;
`;

export const FoodCard = ({ item, setActiveItem,setFoodDialogVisible }) => {
  FoodCard.displayName = "Food-Card";
  return (
    <Card
      onClick={() => {
        setActiveItem(item);
        setFoodDialogVisible(true);
      }}
    >
      <img src={item.img} style={{ width: "100%" }} />
      
      <CardTitle>{item.name} </CardTitle>
      <p>{item.desc} </p>
      <Spacer />
      <Price>{formatPrice(item.price)}</Price>
    </Card>
  );
};
