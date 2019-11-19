import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  body,html {
    font-family: 'Lato', sans-serif;
    padding:0;
    margin:0;
    background: #edffea;
  }

  body,html,section,div,footer, h1,h2,h3,h4,h5,p,ul  {
  box-sizing: border-box;
}

  h1,h2,h3,h4,h5 {
    font-family: 'Patua One', cursive;
    // margin: 6px;
    padding:0px;
    margin-block-start:0;
    margin-block-end:0;
    color: ${colors.darkText};
  }

  h2{
    font-size:28px;
  }

  h3{
    font-weight:normal;
    font-size:22px;
  }

  h4{
    font-weight:normal;
    font-size:18px;
  }
  h5{
    font-weight:normal;
    font-family: Lato;
    font-size:18px;
    color:#fff;
    line-height:32px;
  }

  p,a{
    font-size:16px;
    margin:  0px;
    margin-bottom:  12px;
    padding:0px;
    color: #668;
    
  }

label{
  font-size:18px;
}

`;
