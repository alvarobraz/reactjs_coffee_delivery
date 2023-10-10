import styled from 'styled-components'

export const ContentIntro = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 5.75rem;

  > div {
    width: 36.75rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2', cursive, sans-serif;
      color: ${(props) => props.theme['base-title']};
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
    }

    h2 {
      font-family: 'Roboto', cursive, sans-serif;

      color: ${(props) => props.theme['base-subtitle']};

      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;

      padding-top: 1rem;
    }
  }

  > div:nth-child(2) {
    width: 29.75rem;
  }
`
export const InfoWrap = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  padding-top: 4.125rem;
  padding-bottom: 6.75rem;
  gap: 1.25rem;
`
export const CoffeeList = styled.main`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`
export const H3 = styled.h3`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: 'Baloo 2', cursive, sans-serif;
  color: ${(props) => props.theme['base-subtitle']};

  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  padding-top: 3rem;
  padding-bottom: 2.125rem;
`
