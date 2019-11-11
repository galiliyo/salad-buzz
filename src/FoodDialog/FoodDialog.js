import React from "react"
import styled from "styled-components"
import {Title} from '../Styles/title'

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 20;
`

const Dialog = styled.div`
  width: 500px;
  max-height: 90%;
  overflow-x: scoll;
  background: white;
  position: fixed;
  padding: 16px 16px 30px 16px;
  box-shadow: 12px 12px 8px 4px rgba(0, 0, 0, 0.9);
  z-index: 30;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
`

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image:url(${img});`};
  background-size: cover;
  background-position: center;
`

export function FoodDialog({ activeItem, setOpenFood }) {
  FoodDialog.displayName = "Food-Dialog"
  function closeDialog() {
    setOpenFood()
  }

  return activeItem ? (
    <>
      <DialogShadow onClick={closeDialog} />
      <Dialog>
        <DialogBanner img={activeItem.img} />
        <Title>{activeItem.name}</Title>
      </Dialog>
    </>
  ) : null
}
