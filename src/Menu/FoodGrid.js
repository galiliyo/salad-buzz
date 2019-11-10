import styled from "styled-components"

export const FoodGrid = styled.div`
  display: grid;
  width:100%;
  border: 1px solid red;
  grid-template-columns: 1fr 1fr;
  gap:20px
`
export const Food = styled.div`
// height: 100px;
// width:100px;
background-color:blue;
background-size: cover;
background-position:center;
background-image:${({ img }) => `url(${img});`}`
