import { Button as StyledButton } from './styles'
import search from '@/assets/icons/search.svg'

type Props = {
  disabled?: boolean
}

export function Button({ disabled = false }: Props) {
  return (
    <StyledButton isDisabled={disabled}>
      <img src={search} alt="ícone de lupa" />
    </StyledButton>
  )
}
