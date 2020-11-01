import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-weight: 200;
    font-family: "Arial Narrow", sans-serif;
    overflow-x: hidden;
    background-color: #faf9f8;
  }

  ul {
      list-style: none;
      padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem auto;
    text-align: center;
  }

  h3 {
    font-weight: 700;
    margin: 0 .5rem;
  }

`