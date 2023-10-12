import styled from 'styled-components'

export type TypeVariant = 'card' | 'debit' | 'money'

interface TypeContainerProps {
  variant?: TypeVariant
  // isSelected?: string | undefined
}

export const ContentButton = styled.button<TypeContainerProps>`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  text-align: center;

  width: 11.125rem;
  height: 3.1875rem;

  border-radius: 6px;
  border: 1px solid;
  cursor: pointer;

  svg {
    margin-left: 1rem;
  }

  span {
    padding-top: 0.1rem;
    font-family: 'Roboto', cursive, sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
  }
`
