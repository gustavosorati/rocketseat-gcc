import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['red-200']};
  width: 100%;
  height: 100vh;
  padding: 6.87rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
`

export const Header = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 580px;

  div.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    h3 {
      font-size: 1.75rem;
    }
  }

  h1 {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`

export const Banner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 580px;

  img.dogs {
    max-width: 592px;
    width: 100%;
    margin-top: 6rem;
  }

  div.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`
