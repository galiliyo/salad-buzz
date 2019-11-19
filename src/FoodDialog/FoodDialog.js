import React from "react";
import styled from "styled-components/macro";
import { BtnMain, BtnCancel } from "../Styles/buttons";
import { formatPrice } from "../Data/FoodData";
import { QtyInput } from "./QtyInput";
import { useQty } from "../Hooks/useQty";
import { useToppings } from "../Hooks/useToppings";
import { useChoice } from "../Hooks/useChoice";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { PRICE_PER_TOPPING } from "../Data/FoodData";

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 20;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 130px);
  background: white;
  position: fixed;
  padding: 18px 18px 0 18px;
  box-shadow: 12px 12px 8px 4px rgba(0, 0, 0, 0.9);
  border-radius: 2px;
  z-index: 30;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  ${({ img }) => (img ? `background-image:url(${img});` : `display:none`)};
  background-size: cover;
  background-position: center;
  margin-bottom: 12px;
`;

export const DialogContent = styled.div`
  /* padding: 12px 12px 20px 12px; */
  width: 500px;
  text-align: center;
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
  let noOfToppings = order.toppings.filter(topping => topping.checked).length;
  return order.qty * (order.price + noOfToppings * PRICE_PER_TOPPING);
}

function hasToppings({ section }) {
  return section === "Salad";
}

export function FoodDialogContainer({
  activeItem,
  setActiveItem,
  orders,
  setOrders
}) {
  FoodDialog.displayName = "Food-Dialog";

  const qty = useQty(activeItem && activeItem.qty);
  const toppings = useToppings(activeItem.toppings);
  const choiceRadio = useChoice();
  const isEditing = activeItem.idx > -1;
  function closeDialog() {
    setActiveItem();
  }

  const newOrder = {
    ...activeItem,
    qty: qty.value,
    toppings: toppings.toppings,
    selection: choiceRadio.value
  };

  function addToOrder() {
    setOrders([...orders, newOrder]);
    closeDialog();
  }

  function editOrder() {
    const newOrders = [...orders];
    newOrders[activeItem.idx] = newOrder;
    console.log("newOrders, activeItem.idx", newOrders, activeItem.idx);
    setOrders(newOrders);
    closeDialog();
  }

  return (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={activeItem.img} />
        <DialogContent>
          <h2>{activeItem.name}</h2>
          <QtyInput qty={qty} />
          {hasToppings(activeItem) && (
            <>
              <h4>Choose Toppings</h4>
              <Toppings {...toppings} />
            </>
          )}
          {activeItem.choices && (
            <Choices activeItem={activeItem} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <img src="/img/leaf-divider.png" />

        <Footer>
          <BtnCancel width="280">Cancel</BtnCancel>
          <BtnMain
            width="280"
            onClick={isEditing ? editOrder : addToOrder}
            disabled={activeItem.choices && !newOrder.selection}
          >
            {isEditing ? "Edit Order" : "Add to Order"} :{" "}
            {formatPrice(getPrice(newOrder))}
          </BtnMain>
        </Footer>
      </Dialog>
    </>
  );
}
