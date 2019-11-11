import React, { useState } from "react"
import { GlobalStyle } from "./Styles/globalStyles"
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { Menu } from "./Menu/Menu.js"

function App() {
  const [openFood, setOpenFood] = useState()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu />
      <div>Salad-Bar</div>
      <GlobalStyle />
    </>
  )
}

export default App
