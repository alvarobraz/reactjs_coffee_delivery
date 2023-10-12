import styled from 'styled-components'

export const ContentCheckout = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 2.5rem;
  margin-bottom: 15rem;

  > div {
    width: 40rem;
    height: auto;

    /* background: ${(props) => props.theme['yellow-light']}; */

    h1 {
      font-family: 'Baloo 2', cursive, sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 800;
      font-size: 1.125rem;
      line-height: 130%;
      margin-bottom: 0.9375rem;
    }
  }

  > div + div {
    width: 28rem;
    height: 36.9375rem;

    h1 {
      font-family: 'Baloo 2', cursive, sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 800;
      font-size: 1.125rem;
      line-height: 130%;
      margin-bottom: 0.9375rem;
    }
  }
`

export const CompleteYourOrder = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 100%;
  height: 23.25rem;

  border-radius: 6px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-bottom: 12px;

  > div {
    width: 100%;
    height: 2.625rem;

    margin-bottom: 1rem;
    gap: 12px;
  }
`
export type TypeVariant = 'map' | 'dollar' | 'buttons'

interface TypeContainerProps {
  variant?: TypeVariant
}

export const Box = styled.div<TypeContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  height: 2.75rem;

  svg {
    color: ${(props) =>
      props.variant === 'map'
        ? props.theme['yellow-dark']
        : props.theme.purple};
    margin-right: 0.5rem;
  }

  h3 {
    font-family: 'Roboto', cursive, sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  h4 {
    font-family: 'Roboto', cursive, sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  margin-bottom: 2rem;
`

interface TypeInput {
  optional?: boolean
  type: string
}

export const BaseInput = styled.div<TypeInput>`
  display: flex;
  align-items: center;
  position: relative;

  width: ${(props) =>
    props.type === 'one'
      ? '12.5rem'
      : props.type === 'two'
      ? '100%'
      : '3.75rem'};
  input {
    background: ${(props) => props.theme['base-input']};
    height: 2.625rem;
    width: ${(props) =>
      props.type === 'one'
        ? '12.5rem'
        : props.type === 'two'
        ? '100%'
        : '3.75rem'};
    border-radius: 4px;
    border: 0.5px solid ${(props) => props.theme['base-button']};
    font-weight: 400;
    font-size: 0.875rem;
    padding: 0.75rem;
    outline: 0;
    color: ${(props) => props.theme['base-text']};

    &:focus-visible {
      box-shadow: none;
      border: 0.5px solid ${(props) => props.theme['yellow-dark']};
    }
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  .optional-text {
    position: absolute;
    font-size: 0.75rem;
    right: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputOne = styled(BaseInput)`
  width: 12.5rem;
`

export const InputTwo = styled(BaseInput)`
  width: 100%;
`

export const InputThree = styled(BaseInput)`
  width: 3.75rem;
`

export const FormOfPayment = styled.section`
  background: ${(props) => props.theme['base-card']};

  width: 100%;
  height: 12.9375rem;

  border-radius: 6px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > div {
    width: 100%;
    height: 2.625rem;

    margin-bottom: 2rem;
    gap: 12px;
  }
`

export const ConfirmOrder = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 100%;
  height: 31.125rem;

  border-radius: 6px 44px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-bottom: 12px;
`
