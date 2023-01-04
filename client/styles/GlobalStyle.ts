import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-bgc: #0d1117;
    --font-color: #c9d1d9;
  }

  body {
    width: 100%;
    text-align: center;
    background-color: var(--main-bgc);
  }
  
  * {
    box-sizing: border-box;
    color:var(--font-color);
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle;
