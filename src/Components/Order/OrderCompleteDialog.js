import React from "react";
import styled from "styled-components/macro";
import { Fade } from "Animations/Fade";
import { colors } from "../../Styles/colors";

const OrderCompleteDialogContent = styled.div`
  position: fixed;
  width: 70%;
  bottom: 80px;
  left: 50%;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.3);
  transform: translateX(-50%);
  background: ${colors.veryGreen};

  padding: 12px 24px;
  min-width: 320px;
  z-index: 150;
`;

const Message = styled.h5`
  text-align: center;
  color: white;
  font-weight: normal;
`;

export function OrderCompleteDialog({
  orderDialogVisible,
}) {
 
  return (
    <Fade show={orderDialogVisible}>
      <OrderCompleteDialogContent>
        <Message style={{}}>Your order is on the way</Message>
      </OrderCompleteDialogContent>
    </Fade>
  );
}
// >
