import { Button as StyledButton } from './styles'
import search from '@/assets/icons/search.svg'

export function Button() {
  return (
    <StyledButton>
      <img src={search} alt="ícone de lupa" />
    </StyledButton>
  )
}
