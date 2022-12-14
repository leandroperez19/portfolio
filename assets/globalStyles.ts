import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Lato';
    list-style: none;
    scroll-behavior: smooth;
    &:visited{
      color: #fff;
    }
  }
  body{
    /* overflow: hidden; */
    background-color: #18181b;
    overflow-X: hidden;
  }
  a{
    color: #fff;
  }
`