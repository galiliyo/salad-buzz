import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components/macro";
import { SvgShoppingCart } from "../SvgIcons/SvgShoppingCart";

const ShoppingCartIcon = styled(SvgShoppingCart)`
  fill: white;
  margin-left: 12px;
`;

const orderAdded = keyframes`
0% { transform: scale(1) translateX(0) ;}
50% {transform:  scale(1.2) translateX(5%) ;}
100% {transform:  scale(1) translateX(0) ;}
`;
// TODO - what about this cs helper?
const orderAddedKF = css`
  animation: ${orderAdded} 0.6s ease-in-out;
`;

const CartContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.15);
  }
`;
const Badge = styled.div`
  ${flag => orderAddedKF}
  animation-iteration-count: 2;
`;

const Number = styled.span`
  position: absolute;
  display: block;
  width: 18px;
  text-align: center;
  font-size: 11px;
  top: 2px;
`;

const Circle = styled.div`
  position: absolute;
  background: red;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

export function ShoppingCartContainer({ orders, setOrders, orderVisible ,setOrderVisible }) {
  let noOfOrders = orders.length;
  const subTotal = orders.reduce((total, currOrder) => {
    return currOrder.price + total;
  }, 0);

  // TODO animate on refresh

  function refresh() {
    setOrders([...orders]);
  }

  return (
    <CartContainer onClick={() => setOrderVisible(!orderVisible)}>
      {noOfOrders > 0 && (
        <Badge onClick={refresh}>
          <Circle />
          <Number>{noOfOrders}</Number>
        </Badge>
      )}
      <ShoppingCartIcon />
    </CartContainer>
  );
}
