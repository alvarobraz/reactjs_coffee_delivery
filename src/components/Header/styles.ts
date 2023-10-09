import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a img {
    padding: 2rem 0;
  }
  nav {
    display: flex;
    gap: 0.7rem;
    a {
      width: auto;
      height: 2.375;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      /* color: ${(props) => props.theme['gray-100']}; */
      /* border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
      } */
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
  right: 22px;

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
