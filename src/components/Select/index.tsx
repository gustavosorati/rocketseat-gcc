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
  placeholder: string
  options: {
    value: string | number
    label: string
  }[]
  variant?: 'primary' | 'secondary' | 'tertiary'
  updateValue: (value: string) => Promise<void>
}

export function Select({
  label,
  name,
  placeholder,
  options,
  variant = 'primary',
  updateValue,

  ...rest
}: SelectProps) {
  async function handleUpdate(event: ChangeEvent<HTMLSelectElement>) {
    await updateValue(event.target.value)
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
          {...rest}
        >
          <FilterInputOption value="" defaultValue="">
            {placeholder}
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
