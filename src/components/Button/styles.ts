import styled from 'styled-components'

interface ButtonProps {
  isDisabled: boolean
}

export const Button = styled.button<ButtonProps>`
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f4d35e;
  border: none;
  border-radius: 20px;
  transition: filter 0.2s;

  opacity: ${({ isDisabled }) => isDisabled && 0.6};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  img {
    width: 22px;
  }

  :hover {
    filter: brightness(0.9);
  }
`
