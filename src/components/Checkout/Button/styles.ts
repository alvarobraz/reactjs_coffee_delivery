import styled from 'styled-components'

export type TypeVariant = 'card' | 'debit' | 'money' | 'trash'

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

  width: ${(props) => (props.variant === 'trash' ? '5.6875rem' : '11.125rem')};
  height: ${(props) => (props.variant === 'trash' ? '100%' : '3.1875rem')};

  border-radius: 6px;
  cursor: pointer;

  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
    margin-left: ${(props) => (props.variant === 'trash' ? '0.5rem' : '1rem')};
  }

  span {
    padding-top: ${(props) => (props.variant === 'trash' ? '0' : '0.1rem')};
    font-family: 'Roboto', cursive, sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;

    &:hover {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
