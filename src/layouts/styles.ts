import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  width: calc(100% - 10rem);
  margin: 0rem auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`
