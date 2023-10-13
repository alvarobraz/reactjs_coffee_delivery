import styled from 'styled-components'

export const TypeContent = styled.div`
  background: ${(props) => props.theme['yellow-light']};

  width: 5.0625rem;
  height: 1.3125rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 100px;

  p {
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Roboto', cursive, sans-serif;

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-align: center;
  }
`
