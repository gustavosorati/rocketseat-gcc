import styled from 'styled-components'

export const Container = styled.aside`
  width: 96px;
  height: 820px;
  background: #f15156;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  img {
    width: 45px;
  }
`

export const GoBack = styled.button`
  outline: none;
  border: none;
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4d35e;
  border-radius: 15px;
`
