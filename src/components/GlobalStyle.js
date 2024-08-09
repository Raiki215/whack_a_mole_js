import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  :root {
    --brand-color: rebeccapurple;
    --accent-color: darkorange;
    --text-color: rgb(40, 40, 40);
    --bg-color: #444;
  }
  * {
    font-family: 'Press Start 2P', cursive;
  }
  body {
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    overflow:hidden;
    width: 100%;
  }
`;

export default GlobalStyle;
