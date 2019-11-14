import React from "react";
import styled from "styled-components/macro";
import { BtnInc } from "../Styles/buttons";

const QtyInputStyled = styled.input`
  font-size: 16px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

export const QtyInput = ({ qty }) => {
  function updateQty(amount) {
    qty.setValue(qty.value + amount);
  }

  return (
    <QtyContainer>
      <h4>Quantity: </h4>
      <BtnInc disabled={qty.value === 1} onClick={() => updateQty(-1)}>
        -
      </BtnInc>
      <QtyInputStyled {...qty}></QtyInputStyled>
      <BtnInc onClick={() => updateQty(1)}>+</BtnInc>
    </QtyContainer>
  );
};

const QtyContainer = styled.div`
  display: flex;
  align-items: middle;
  line-height: 26px;
`;
