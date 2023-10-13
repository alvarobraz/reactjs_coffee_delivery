import styled from 'styled-components'

export const Counter = styled.div`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding: 0 0.6rem;

  width: 4.5rem;
  height: 2.375rem;

  border-radius: 6px;

  button {
    border: 0;
    cursor: pointer;

    svg {
      padding-top: 0.1rem;
      color: ${(props) => props.theme.purple};
    }
  }

  button:hover {
    border: 0;
    background: transparent;

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    font-family: 'Roboto', cursive, sans-serif;

    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
  }
`
