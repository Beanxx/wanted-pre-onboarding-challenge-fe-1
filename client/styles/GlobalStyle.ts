import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-bgc: #0d1117;
    --font-color: #c9d1d9;
    --side-bgc: #161b22;
    --border-color: #21262d;
    --btn-color: #21262d;
    --btn-hover-color: #30363d;
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
