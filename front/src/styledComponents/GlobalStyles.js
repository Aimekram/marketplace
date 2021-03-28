import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
      margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    font-weight: 700;
    margin: 0 .5rem;
  }

`;
