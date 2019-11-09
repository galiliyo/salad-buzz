import React from "react"
import { createGlobalStyle } from "styled-components"
import { Navbar } from "./Navbar/Navbar"
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    padding:0;
    margin:0
  }

  h1,h2,h3 {
    font-family: 'Patua One', cursive;
  }
`

function App() {
  return (
    <>
      <Navbar>Hello</Navbar>
      <div>Salad-Bar</div>
      <GlobalStyle />
    </>
  )
}

export default App
