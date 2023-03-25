import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['pink-100']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  margin: 50px;
  max-width: 704px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding: 72px;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;

  border: 1px solid #d3e2e6;
`

export const Contact = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 20px 0;
  margin-top: 50px;

  border-radius: 20px;
  background-color: #3cdc8c;

  font-size: 18px;
  font-weight: 800;
  color: #fff;

  text-decoration: none;
`
