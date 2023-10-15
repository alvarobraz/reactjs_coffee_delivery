import styled, { css } from 'styled-components'

export type TypeVariant =
  | 'shopping'
  | 'timer'
  | 'package'
  | 'coffee'
  | 'map'
  | 'timer2'
  | 'money'

interface TypeContainerProps {
  variant: TypeVariant
}

const typeVariants = {
  shopping: '#C47F17',
  timer: '#DBAC2C',
  package: '#403937',
  coffee: '#8047F8',
  map: '#8047F8',
  timer2: '#DBAC2C',
  money: '#C47F17',
}

export const InfoWrapContent = styled.section<TypeContainerProps>`
  width: ${({ variant }) =>
    variant === ('shopping' || 'timer') ? '14.4375rem' : 'auto'};
  height: 2rem;
  display: flex;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  span {
    ${(props) => {
      return css`
        background-color: ${typeVariants[props.variant]};
      `
    }}

    width: ${({ variant }) =>
      variant === 'map' || variant === 'timer2' || variant === 'money'
        ? '2.4rem'
        : '2rem'};
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    svg {
      ${({ variant }) =>
        variant === 'map' || variant === 'timer2' || variant === 'money'
          ? '2.4rem'
          : '2rem'};
      color: ${(props) => props.theme['base-background']};
    }
  }

  > div {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    width: auto;

    color: ${(props) => props.theme['base-text']};

    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
