import styled, { css } from 'styled-components'

export type TypeVariant = 'shopping' | 'timer' | 'package' | 'coffee'

interface TypeContainerProps {
  variant: TypeVariant
}

const typeVariants = {
  shopping: '#C47F17',
  timer: '#DBAC2C',
  package: '#403937',
  coffee: '#8047F8',
}

export const InfoWrapContent = styled.div<TypeContainerProps>`
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

    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    svg {
      color: ${(props) => props.theme['base-background']};
    }
  }

  p {
    width: auto;

    color: ${(props) => props.theme['base-text']};

    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
