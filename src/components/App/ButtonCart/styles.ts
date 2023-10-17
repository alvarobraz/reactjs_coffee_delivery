import { styled } from 'styled-components'

export interface PropsButtonCart {
  variant?: 'header' | 'cart'
}

export const Cart = styled.div<PropsButtonCart>`
  /* background: ${(props) => props.theme['purple-dark']}; */

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    background: ${(props) =>
      props.variant === 'cart'
        ? props.theme['purple-dark']
        : props.theme['yellow-dark']};

    width: 2.375rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
  }

  a:hover {
    background: ${(props) =>
      props.variant === 'cart' ? props.theme.purple : props.theme.yellow};
  }

  svg {
    color: ${(props) => props.theme['base-card']};
  }
`

export const Counter = styled.div`
  background: ${(props) => props.theme['yellow-dark']};

  width: 20px;
  height: 20px;

  border-radius: 50%;

  position: relative;
  top: -8px;
  right: 13px;

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
