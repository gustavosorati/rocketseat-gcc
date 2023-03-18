import chevron from '@/assets/icons/chevron-bottom.svg'
import { ChangeEvent, ComponentProps } from 'react'
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
  defaultText: string
  options: {
    value: string | number
    label: string
  }[]
  variant?: 'primary' | 'secondary' | 'tertiary'
  update: (value: string) => void
}

export function Select({
  label,
  name,
  defaultText,
  options,
  variant = 'primary',
  update,
}: SelectProps) {
  async function handleUpdate(event: ChangeEvent<HTMLSelectElement>) {
    update(event.target.value)
  }

  return (
    <Filter variant={variant}>
      {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}
      <FilterWrapper variant={variant}>
        <FilterInput
          name={name}
          id={name}
          variant={variant}
          onChange={handleUpdate}
        >
          <FilterInputOption value="" defaultValue="">
            {defaultText}
          </FilterInputOption>
          {options.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.value}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  )
}
