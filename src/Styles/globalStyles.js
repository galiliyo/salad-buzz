import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body,html {
    font-family: 'Lato', sans-serif;
    padding:0;
    margin:0;
    background: #edffea;
   
  }

  h1,h2,h3 {
    font-family: 'Patua One', cursive;
    margin: 6px;
    padding:0px;
    margin-block-start:0;
    margin-block-end:0;
    color: #668;
  }

  h2{
    font-size:28px;
  }

  h3{
    font-weight:normal;
    font-size:22px;
  }

  p{
    font-size:16px;
    margin:  0px;
    margin-bottom:  12px;
    padding:0px;
    color: #668;
    
  }
`
