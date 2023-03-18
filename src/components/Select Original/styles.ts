import styled, { css } from 'styled-components'

interface FilterProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Filter = styled.div<FilterProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
`

export const FilterLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`

interface SelectProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const FilterWrapper = styled.div<SelectProps>`
  position: relative;

  & > img {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);

    ${({ variant }) =>
      variant === 'tertiary' &&
      css`
        width: 10px;
        left: 40px;
      `}
  }
`
export const FilterInput = styled.select<SelectProps>`
  width: 100%;
  height: 60px;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 800;
  color: #ffffff;

  border-radius: 15px;
  border: none;
  outline: none;
  padding: 20px 2rem;
  appearance: none;
  position: relative;

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors['red-200']};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      background-color: ${theme.colors['red-400']};
      border: 1px solid #f15156;
    `}

  ${({ variant, theme }) =>
    variant === 'tertiary' &&
    css`
      background-color: ${theme.colors['red-200']};
      border: 1px solid ${theme.colors.white};
      min-width: 60px;
      padding: 10px;
    `}

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
