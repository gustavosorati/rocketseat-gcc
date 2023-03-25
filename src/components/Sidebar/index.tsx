import { ArrowLeft } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as Styled from './styles'

export function Sidebar() {
  const { colors } = useTheme()
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>

      <Styled.GoBack onClick={() => navigate(-1)}>
        <ArrowLeft size={24} weight="fill" color={colors['blue-600']} />
      </Styled.GoBack>
    </Styled.Container>
  )
}
