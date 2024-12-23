import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing_: antialiased;
    -moz-osx-font-smoothing_: grayscale;
  }

  :root {
	  font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.gray};

    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
  }
`;