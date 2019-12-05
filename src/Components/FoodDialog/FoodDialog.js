import React from "react";
import styled from "styled-components/macro";
import { BtnMain, BtnCancel } from "../../Styles/buttons";
import { formatPrice } from "../../Data/FoodData";
import { QtyInput } from "./QtyInput";
import { useQty } from "../../Hooks/useQty";
import { useToppings } from "../../Hooks/useToppings";
import { useChoice } from "../../Hooks/useChoice";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { Fade } from "Animations/Fade";
import { PRICE_PER_TOPPING } from "../../Data/FoodData";

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  max-width: 600px;
  max-height: calc(100vh - 130px);
  background: white;
  position: fixed;
  padding: 24px 24px 0 24px;
  box-shadow: 12px 12px 8px 4px rgba(0, 0, 0, 0.9);
  border-radius: 2px;
  z-index: 30;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
  @media (max-width: 640px) {
    width: 100vw;
    top: 60px;
    left:0;
    transform: translateX(0);
    max-height: initial;
    height: calc(100vh);
  }
`;

const DialogBanner = styled.div`
  min-height: 200px;
  ${({ img }) => (img ? `background-image:url(${img});` : `display:none`)};
  background-size: cover;
  background-position: center;
  margin-bottom: 12px;
`;

export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 12px;
  flex: 0 0 60px;
`;

export function FoodDialog(props) {
  return (
    <Fade show={props.foodDialogVisible}>
      {props.activeItem && <FoodDialogContainer {...props} />}
    </Fade>
  );
}

export function getPrice(order) {
  let noOfToppings = order.toppings.filter(topping => topping.checked).length;
  return order.qty * (order.price + noOfToppings * PRICE_PER_TOPPING);
}

function hasToppings({ section }) {
  return section === "Salad";
}

export function FoodDialogContainer({
  foodDialogVisible,
  setFoodDialogVisible,
  activeItem,
  setActiveItem,
  orders,
  setOrders
}) {
  const qty = useQty(activeItem && activeItem.qty);
  const toppings = useToppings(activeItem.toppings);
  const choiceRadio = useChoice();
  const isEditing = activeItem.idx > -1;
  function closeDialog() {
    setFoodDialogVisible(false);
    setTimeout(() => {
      setActiveItem(null);
    }, 500);
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
    setOrders(newOrders);
    closeDialog();
  }

  return (
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
        <BtnCancel width="45%" onClick={closeDialog}>
          Cancel
        </BtnCancel>
        <BtnMain
          width="45%"
          onClick={isEditing ? editOrder : addToOrder}
          disabled={activeItem.choices && !newOrder.selection}
        >
          {isEditing ? "Edit Order" : "Add to Order"} :{" "}
          {formatPrice(getPrice(newOrder))}
        </BtnMain>
      </Footer>
    </Dialog>
  );
}
