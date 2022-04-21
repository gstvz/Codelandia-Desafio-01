import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  };

  html, body {
    font-family: "Lexend Deca", sans-serif;
    font-size: 62.5%;
    height: 100%;
    overflow: hidden;
  };

  a {
    color: inherit;
    text-decoration: none;
  };

  button {
    border: none;
    cursor: pointer;
  };

  input {
    border: none;
  };

  li {
    list-style-type: none;
  };
`;
