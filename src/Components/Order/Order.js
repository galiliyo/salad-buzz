import React from "react";
import styled from "styled-components/macro";
import { colors } from "../../Styles/colors";
import { BtnMain } from "../../Styles/buttons";
import { formatPrice } from "../../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
import { SvgClose } from "../SvgIcons/SvgClose";
const database = window.firebase.database();



const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  padding: 24px 18px 36px 18px;
  right: 0;
  top: 60px;
  width: 320px;
  border-left: 1px solid ${colors.darkGreen};
  box-shadow: 0px 0px 6px rgba(0, 0.2, 0, 0.4);
  background: white;
  height: calc(100vh - 60px);
  z-index: 30;
  transition: all 0.4s;
  @media (max-width: 1354px) {
    width: 90%;
    max-width: 360px;
    right: 0;
    transform: translateX(${props => (props.visible ? `-0 ` : "100%")});
  }
  @media (max-width: 640px) {
    transform: translateX(${props => (props.visible ? `-0 ` : "100%")});
    max-width: initial;
    position: relative;
    width: 100%;
    top: 60px;
  }
`;
const OrderContent = styled.div`
  margin: 6px 0 24px;
  min-height: 100px;
  flex: 10 0 100px;
  overflow: auto;
`;

const OrderItem = styled.div`
  display: grid;
  padding: 12px 6px;
  grid-template-columns: 18px 170px 18px 44px;
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
const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderFooter = styled.div`
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

const CloseIcon = styled(SvgClose)`
  fill: ${colors.darkText};
  display: inline-block;
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

  newOrderRef.set({ order: newOrders, email, displayName }).then(() => {
    console.log("successfully set data");
  });
}

export function Order({
  orders,
  setOrders,
  setActiveItem,
  loggedIn,
  login,
  toggleOrderCompleteDialog,
  orderVisible,
  setOrderVisible,
  isSmallScreen,
  setFoodDialogVisible
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
  function editItem(order, idx) {
    setTimeout(
      () => {
        setActiveItem({ ...order, idx });
        setFoodDialogVisible(true);
      },
      350,
      (order, idx)
    );
  }
  return (
   
      <OrderStyled
        visible={orderVisible}
        onClick={() => setOrderVisible(!orderVisible)}
      >
        <OrderHeader>
          <h2>Your Order</h2> {isSmallScreen && <CloseIcon />}
        </OrderHeader>
        <OrderContent>
          {orders.map((order, idx) => {
            return (
              <OrderItem key={idx} onClick={() => editItem(order, idx)}>
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
        <OrderFooter>
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
                let x = sendOrder(orders, loggedIn);
                setOrders([]);
                toggleOrderCompleteDialog();
              } else {
                login();
              }
            }}
          >
            Order
          </BtnOrder>
        </OrderFooter>
      </OrderStyled>

  );
}
