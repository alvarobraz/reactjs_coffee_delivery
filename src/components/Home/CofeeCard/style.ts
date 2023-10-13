import styled from 'styled-components'

export const ContentBuy = styled.div`
  width: 100%;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
export const ContentPrice = styled.div`
  /* background: ${(props) => props.theme['yellow-dark']}; */
  width: 5rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  span {
    font-family: 'Roboto', cursive, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};

    font-family: 'Baloo 2', cursive, sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`
export const ContentActions = styled.div`
  /* background: ${(props) => props.theme['yellow-dark']}; */
  width: 7.375rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
