import styled from 'styled-components'

export const ContentCoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 16rem;
  height: 19.375rem;

  border-radius: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0 1.5rem;
  margin-bottom: 40px;

  img {
    position: relative;
    top: -1.2rem;
  }

  h1 {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2', cursive, sans-serif;

    padding-top: 1rem;
    padding-bottom: 0.5rem;

    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
  }

  h2 {
    color: ${(props) => props.theme['base-label']};

    font-family: 'Roboto', cursive, sans-serif;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    padding-bottom: 2.0625rem;
  }
`
export const ContentType = styled.div`
  width: 100%;
  height: 1.3125rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.4rem;
`
