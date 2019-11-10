import React from "react"
import { createGlobalStyle } from "styled-components"
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import {Menu} from "./Menu/Menu.js"
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
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu/>
      <div>Salad-Bar</div>
      <GlobalStyle />
    </>
  )
}

export default App
