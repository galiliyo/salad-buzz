import React from "react";
import styled from "styled-components/macro";
import { colors } from "../Styles/colors";
import { BtnMain } from "../Styles/buttons";
// import { Footer } from "../FoodDialog/FoodDialog";
import { Title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
const database = window.firebase.database();

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 24px 18px;
  right: 0;
  top: 60px;
  width: 320px;
  border-left: 1px solid ${colors.darkGreen};
  box-shadow: 0px 0px 6px rgba(0, 0.2, 0, 0.4);
  background: white;
  height: calc(100vh - 60px);
`;
const OrderContent = styled.div`
  /* min-height: 100px;
  overflow: auto; */
`;

const OrderItem = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 20px 180px 20px 40px;
  justify-content: space-between;
  font-family: Lato;
  font-size: 16px;
  line-height: 42px;
  color: black;
  border-bottom: 1px solid grey;
  :hover {
    background: ${colors.hoverGreen};
    cursor: pointer;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subtotal = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: stretch;
  justify-content: space-between;
`;

const BtnOrder = styled(BtnMain)`
  width: initial;
  margin: 0;
  padding: 16px;
`;
function sendOrder(orders, { email, displayName }) {
  const newOrderRef = database.ref("orders").push();

  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey] || orderKey === "desc") {
        //}
        return acc;
      }
      if (orderKey === "toppings") {
        return {
          ...acc,
          [orderKey]: order[orderKey]
            .filter(({ checked }) => checked)
            .map(({ name }) => name)
        };
      }
      return { ...acc, [orderKey]: order[orderKey] };
    }, {});
  });

  newOrderRef
    .set({ order: newOrders, email, displayName })
    .then(() => console.log("successfully set data"));
}

export function Order({
  orders,
  setOrders,
  setActiveItem,
  loggedIn,
  login,
  toggleOrderCompleteDialog
}) {
  const subTotal = orders.reduce((total, currOrder) => {
    return getPrice(currOrder) + total;
  }, 0);

  function deleteItem(e, idx) {
    e.stopPropagation();
    const newOrders = [...orders];
    newOrders.splice(idx, 1);
    setOrders(newOrders);
  }

  return (
    <>
      <OrderStyled>
        <OrderContent>
          <h2>Your Order</h2>

          {orders.map((order, idx) => {
            return (
              <OrderItem
                key={idx}
                onClick={() => setActiveItem({ ...order, idx })}
              >
                <div>{order.qty}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={idx => {
                    deleteItem(idx);
                  }}
                >
                  🗑️
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
            );
          })}
        </OrderContent>
        <Footer>
          {orders.length > 0 && (
            <Subtotal>
              <h3>Total: </h3>
              <h3>{formatPrice(subTotal)}</h3>
            </Subtotal>
          )}
          <BtnOrder
            disabled={!orders.length}
            onClick={() => {
              if (loggedIn) {
                sendOrder(orders, loggedIn);
                toggleOrderCompleteDialog();
              } else {
                login();
              }
            }}
          >
            Order
          </BtnOrder>
        </Footer>
      </OrderStyled>
    </>
  );
}
