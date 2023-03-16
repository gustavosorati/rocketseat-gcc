import chevron from '@/assets/icons/chevron-bottom.svg'
import { ComponentProps } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
  variant?: 'primary' | 'secondary'
}

export function Select({
  label,
  name,
  variant = 'primary',
  options,
}: SelectProps) {
  return (
    <Filter>
      {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}
      <FilterWrapper>
        <FilterInput name={name} id={name} variant={variant}>
          <FilterInputOption value="" disabled selected>
            Selecione dfsdfsdf
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  )
}
