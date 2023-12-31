import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  a img {
    padding: 2rem 0;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: relative;
    right: -20px;
  }

  @media (max-width: 768px) {
    a img {
      position: relative;
      top: 0.3rem;

      width: 75%;

      padding: 1rem 0;
    }
  }
`

export const Weather = styled.div`
  background: ${(props) => props.theme['purple-light']};

  width: 8.9375;
  height: 2.375;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0.7rem;
  gap: 0.5rem;

  border-radius: 6px;

  margin-right: 0.7rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const Cart = styled.div`
  background: ${(props) => props.theme['yellow-light']};

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  svg path {
    /* fill: ${(props) => props.theme['yellow-dark']}; */
  }
`

export const Counter = styled.div`
  background: ${(props) => props.theme['yellow-dark']};

  width: 20px;
  height: 20px;

  border-radius: 50%;

  position: relative;
  top: -8px;
  /* right: 22px; */

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 130%;
  }
`
