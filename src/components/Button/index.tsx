import { Button as StyledButton } from './styles'
import search from '@/assets/icons/search.svg'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof StyledButton> & {}

export function Button({ disabled = false, ...rest }: Props) {
  return (
    <StyledButton isDisabled={disabled} {...rest}>
      <img src={search} alt="ícone de lupa" />
    </StyledButton>
  )
}
