import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateX(60%);
  }

  to {
    opacity: .9;
    transform: translateX(100%);

  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  div {
    display: flex;
    gap: 1rem;
  }
`

export const ImageCard = styled.img`
  width: 100%;
  height: 336px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
  object-position: top;

  opacity: 1;

  &.fade-out {
    animation: ${fadeOut} 700s ease-in-out;
  }
`

export const ImageItem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 15px;
  border: 4px solid transparent;

  opacity: 0.6;
  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    opacity: 1;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['blue-600']};
  }

  &.selected {
    border: 4px solid ${({ theme }) => theme.colors['blue-600']};
    cursor: not-allowed;
    opacity: 1;
  }
`
