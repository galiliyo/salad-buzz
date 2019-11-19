import React from "react";
import styled from "styled-components";

import { DialogShadow, Dialog, DialogContent } from "../FoodDialog/FoodDialog";
import { BtnMain } from "../Styles/buttons";

const OrderCompleteDialogContent = styled(DialogContent)`
  width: 300px;
  min-height: 40px;
`;

const Footer = styled.div`
  display: flex;
  padding: 12px 0;

  justify-content: flex-end;
`;

export function OrderCompleteDialog({ toggleOrderCompleteDialog, setOrders }) {
  function completeOrder() {
    toggleOrderCompleteDialog();
    setOrders([]);
  }
  return (
    <>
      <DialogShadow />
      <Dialog>
        <OrderCompleteDialogContent>
          <h3>Your order is on the way</h3>
          <p>Thanks for choosing Salad-Buzz</p>
        </OrderCompleteDialogContent>
        <Footer>
          <BtnMain width="50" onClick={completeOrder}>
            OK
          </BtnMain>
        </Footer>
      </Dialog>
    </>
  );
}
