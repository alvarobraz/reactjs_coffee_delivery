import styled from 'styled-components'

export const ContentConfirmOrder = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 2.5rem;
  margin-bottom: 15rem;

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  h1 {
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Baloo 2', cursive, sans-serif;
    padding-bottom: 0.5rem;

    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Roboto', cursive, sans-serif;
    padding-bottom: 0.5rem;

    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const PaymentMethod = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 2.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column-reverse;
  }

  > div {
    width: 32.875rem;
    height: 16.875rem;

    display: flex;
    align-items: center;
    align-content: center;

    background: linear-gradient(to left, #8047f8 0%, #dbac2c 100%);
    padding: 1px;

    border-radius: 6px 36px;

    @media (max-width: 768px) {
      width: 100%;
    }

    > div {
      background: ${(props) => props.theme['base-background']};

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      padding: 2.5rem;

      border-radius: 6px 36px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }

  > div + div {
    background: ${(props) => props.theme['base-background']};

    width: 30.75rem;
    height: 18.3125rem;

    display: flex;
    align-items: center;
    align-content: center;

    img {
      width: 30.75rem;
      height: 16.875rem;

      @media (max-width: 768px) {
        width: 80%;
      }
    }
  }
`
