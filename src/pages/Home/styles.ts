import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['red-200']};
  width: 100%;
  height: 100vh;
  padding: 6.87rem; // 110px
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
  gap: 7rem; // 110px
`

export const Left = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 580px;

  header {
    display: flex;
    align-items: center;
    gap: 0.75rem; // 12px

    h3 {
      font-size: 1.75rem; // 28px
    }
  }

  h1 {
    font-size: 4.5rem; // 72px
  }

  p {
    font-size: 1.5rem; // 24px
  }
`

export const Right = styled.div`
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

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`
