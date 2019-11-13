import React from "react"
import styled from "styled-components/macro"
import * as colors from "../Styles/colors"
import { BtnMain } from "../Styles/buttons"
import { Footer } from "../FoodDialog/FoodDialog"
import { Title } from "../Styles/title"
import { formatPrice } from "../Data/FoodData"

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  top: 60px;
  width: 340px;
  border-left: 1px solid ${colors.darkGreen};
  box-shadow: 0px 0px 6px rgba(0, 0.2, 0, 0.4);
  background: white;
  height: calc(100vh - 60px);
`
const OrderContent = styled.div`
  padding: 24px;
  min-height: 100px;
  overflow: auto;
`
const OrderFooter = styled.div``

const BtnOrder = styled(BtnMain)`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
`
const OrderItem = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
  font-family: Lato;
  font-size: 16px;
  height: 42px;
  line-height: 42px;

  color: black;
  border-bottom: 1px solid grey;
`

export function Order({ orders, setOrders }) {
  return (
    <>
      <OrderStyled>
        <OrderContent>
          <Title>Your Order</Title>
          {orders.map((order, i) => {
            return (
              <OrderItem key={i}>
                <div>1</div>
                <div>{order.name}</div>
                <div/>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            )
          })}
        </OrderContent>
        <Footer>
          <BtnOrder>Order</BtnOrder>
        </Footer>
      </OrderStyled>
    </>
  )
}
