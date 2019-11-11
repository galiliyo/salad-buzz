import styled from "styled-components"

export const BtnMain = styled.button`
  box-shadow: 0px -1px 14px -7px #3e7327;
  background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
  background-color: #77b55a;
  border-radius: 4px;
  border: 1px solid #4b8f29;
  margin: 12px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
  width: 200px;
  padding: 8px 18px;
  text-decoration: none;
  transition: all 0.15s;
  :hover {
    box-shadow: 1px 1px 6px #3e7327;
    background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
    background-color: #72b352;
  }
  :active {
    position: relative;
    top: 1px;
  }
`
export const BtnCancel = styled(BtnMain)`
  background: none;
  background-color: white;
  /* border: 1px solid #ea3752; */
  border: none;
  color: #ea3752;
  /* box-shadow: 0px -1px 14px -7px #ea3752; */
  box-shadow: initial;
  :hover {
    color: white;
    box-shadow: 1px 1px 6px #ea3752;
    background: linear-gradient(to bottom, #da1115, #e03412 100%);
    background-color: #ea3752;
  }
`
