import { ArrowLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as Styled from './styles'

export function Sidebar() {
  const { colors } = useTheme()
  return (
    <Styled.Container>
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>

      <Styled.GoBack>
        <ArrowLeft size={24} weight="fill" color={colors['blue-600']} />
      </Styled.GoBack>
    </Styled.Container>
  )
}
