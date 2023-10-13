import styled from 'styled-components'

export const ContentOrder = styled.div`
  /* background: ${(props) => props.theme['yellow-dark']}; */

  width: 100%;
  height: 6.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div + div {
    width: auto;
    height: 3.8125;
    margin: 0 0 0 auto;

    p {
      font-family: 'Roboto', cursive, sans-serif;
      color: ${(props) => props.theme['base-text']};
      font-weight: 800;
      font-size: 1rem;
      line-height: 130%;
    }
  }
`

export const ContentTitleCounterRemove = styled.div`
  width: 10.6875rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: cen;
  margin: 0 0 0 1.25rem;

  p {
    font-family: 'Roboto', cursive, sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* background: ${(props) => props.theme.yellow}; */
`
