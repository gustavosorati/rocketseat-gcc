import styled from 'styled-components'

interface Props {
  size?: string
  weight?: number
  mt?: string
  mb?: string
  color?: string
}

export const Heading = styled.h2<Props>`
  color: ${({ theme, color }) => color || theme.colors['blue-600']};
  font-size: ${({ size }) => size || '3.75rem'};
  font-weight: ${({ weight }) => weight || 800};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`
