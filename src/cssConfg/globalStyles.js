import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

#root {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    overflow: auto;
    min-height: 100vh;
    width: 100vw;
    flex: 1;
  }

* {
  box-sizing: border-box;
  /* background-color: lightblue; */
}

body {  
    display: flex;
}


`;
