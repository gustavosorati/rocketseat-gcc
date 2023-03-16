import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const FilterLabel = styled.label`
  font-size: 16px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    width: 12px;
    height: 12px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const FilterInput = styled.select`
  appearance: none;
  min-width: 72px;
  height: 60px;
  width: 100%;
  line-height: 19.2px;
  font-weight: 800;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors['red-200']};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  outline: none;
  padding: 20px;
  position: relative;

  &::before {
    content: '⌄';
    width: 12px;
    height: 6px;
    display: absolute;
    color: #ffffff;
  }
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 5px 7px;
`
