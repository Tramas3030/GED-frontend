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

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.gray};
  }

  body {
    background-color: ${props => props.theme["purple-700"]};
    color: ${props => props.theme.gray};

    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
  }
`;