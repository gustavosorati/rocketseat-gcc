import styled from 'styled-components'

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

export const FilterWrapper = styled.div`
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface FilterInputProps {
  variant?: 'primary' | 'secondary'
}

export const FilterInput = styled.select<FilterInputProps>`
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: #ffffff;
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors['red-200'] : theme.colors['red-400']};
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 20px;
  appearance: none;
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
