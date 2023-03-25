import styled from 'styled-components'

interface Props {
  size?: string
  weight?: number
  mt?: string
  mb?: string
  color?: string
}

export const Text = styled.p<Props>`
  color: ${({ theme, color }) => color || theme.colors['blue-600']};
  font-size: ${({ size }) => size || '16px'};
  font-weight: ${({ weight }) => weight || 400};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
`
