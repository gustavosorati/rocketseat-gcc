import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 50px 0;
  gap: 18px;

  div.left {
    width: 64px;
    height: 64px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors['orange-400']};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 27px;
    }
  }

  div.right {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 13px 27px;
  background: rgba(13, 59, 102, 0.05);
  border-radius: 10px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors['blue-600']};

  &:hover {
    filter: hue-rotate(294deg);
  }
`
