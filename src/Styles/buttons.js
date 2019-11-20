import styled from "styled-components/macro";
import { colors } from "../Styles/colors";

export const BtnMain = styled.button`
  box-shadow: 0px -1px 14px -7px ${colors.darkGreen};
  background: linear-gradient(
    to bottom,
    ${colors.veryGreen} 5%,
    ${colors.saladGreen} 100%
  );
  background-color: ${colors.saladGreen};
  border-radius: 4px;
  border: 1px solid ${colors.darkGreen};
  margin: 12px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
  width: ${({ width }) => `${width}`};
  padding: 8px;
  text-decoration: none;
  transition: all 0.15s;
  outline: none;
  :disabled,
  :disabled:hover {
    background-color: ${colors.darkGrey};
    background: ${colors.darkGrey};
    box-shadow: none;
    border: none;
  }
  :hover {
    box-shadow: 1px 1px 6px ${colors.darkGreen};
    background: linear-gradient(
      to bottom,
      ${colors.saladGreen} 5%,
      #${colors.hoverGreen} 100%
    );
    background-color: ${colors.saladGreen};
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
export const BtnCancel = styled(BtnMain)`
  background: none;
  background-color: white;
  border: none;
  color: ${colors.reddishRed};
  box-shadow: initial;
  :hover {
    color: white;
    box-shadow: 1px 1px 6px ${colors.reddishRed};
    background: linear-gradient(to bottom, #da1115, #e03412 100%);
    background-color: ${colors.reddishRed};
  }
`;
export const BtnInc = styled(BtnMain)`
  width: 28px;
  font-size: 20px;
  padding: 2px;
  font-weight: bold;
  text-align: center;
  background: none;
  background-color: white;
  border: 1px solid ${colors.darkGreen};
  color: ${colors.darkGreen};
  box-shadow: initial;
  :hover {
    box-shadow: 1px 1px 6px ${colors.darkGreen};
    background: linear-gradient(
      to bottom,
      ${colors.saladGreen} 5%,
      ${colors.veryGreen} 100%
    );
    background-color: ${colors.saladGreen};
  }
  :disabled {
    opacity: 0.5;
    border: 1px solid ${colors.darkGrey};
  }
`;
