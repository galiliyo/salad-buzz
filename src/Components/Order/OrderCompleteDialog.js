import React from "react";
import styled from "styled-components/macro";
import {Fade} from "Animations/Fade"
// import { DialogShadow } from "../UI/DialogShadow";
import { Dialog, DialogContent } from "../FoodDialog/FoodDialog";
import { BtnMain } from "../../Styles/buttons";

const OrderCompleteDialogContent = styled(DialogContent)`
  position: absolute;
  width: 300px;
  min-height: 40px;
  z-index: 150;
`;

const Footer = styled.div`
  display: flex;
  padding: 12px 0;

  justify-content: flex-end;
`;

export function OrderCompleteDialog({
  orderDialogVisible,
  toggleOrderCompleteDialog,
  setOrders
}) {
  function completeOrder() {
    toggleOrderCompleteDialog();
  }

  return (
    <Fade show={orderDialogVisible}>
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
    </Fade>
  );
}
