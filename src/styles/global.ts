import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}
`
