import React from "react";
import styled from "styled-components/macro";
import { Title } from "../Styles/title";
import { BtnMain, BtnCancel } from "../Styles/buttons";
import { formatPrice } from "../Data/FoodData";
import { QtyInput } from "./QtyInput";
import { useQty } from "../Hooks/useQty";
import * as colors from "../Styles/colors";

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 20;
`;

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: calc(100vh - 130px);
  background: white;
  position: fixed;
  padding: 12px 12px 0 12px;
  box-shadow: 12px 12px 8px 4px rgba(0, 0, 0, 0.9);
  border-radius: 2px;
  z-index: 30;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  ${({ img }) => `background-image:url(${img});`};
  background-size: cover;
  background-position: center;
`;

export const DialogContent = styled.div`
  padding: 12px 12px 20px 12px;
  min-height: 100px;
  overflow: auto;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  flex: 0 0 60px;
`;

export function FoodDialog(props) {
  if (!props.activeItem) return null;
  else return <FoodDialogContainer {...props} />;
}

export function getPrice(order) {
  return order.qty * order.price;
}

function FoodDialogContainer({ activeItem, setActiveItem, orders, setOrders }) {
  FoodDialog.displayName = "Food-Dialog";

  const qty = useQty(activeItem && activeItem.qty);
  function closeDialog() {
    setActiveItem();
  }

  const newOrder = { ...activeItem, qty: qty.value };

  function addToOrder() {
    setOrders([...orders, newOrder]);
    closeDialog();
  }
  return (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={activeItem.img} />
        <DialogContent>
          <Title>{activeItem.name}</Title>
          <QtyInput qty={qty} />
          <p>{activeItem.desc}</p>
        </DialogContent>
        <img src="/img/leaf-divider.png" />

        <Footer>
          <BtnCancel>Cancel</BtnCancel>
          <BtnMain onClick={addToOrder}>
            Add to Order: {formatPrice(getPrice(newOrder))}
          </BtnMain>
        </Footer>
      </Dialog>
    </>
  );
}
