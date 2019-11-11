import React from "react"
import styled from "styled-components"
import * as colors from "../Styles/colors"
import { BtnMain } from "../Styles/buttons"
import { Footer } from "../FoodDialog/FoodDialog"

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
  padding: 16px 16px 20px 16px;
  min-height: 100px;
  overflow: auto;
`
const OrderFooter = styled.div``

const BtnOrder = styled(BtnMain)`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
`

export function Order({ orders, setOrders }) {
  return (
    <>
      <OrderStyled>
        <OrderContent>
          {orders.map(order => {
            return (
              <ul>
                <li>order</li>
              </ul>
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
