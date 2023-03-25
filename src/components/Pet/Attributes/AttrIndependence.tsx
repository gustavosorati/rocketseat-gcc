import { Text } from '@/components/Text'
import { BracketsSquare } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AttrContainer } from './styles'

interface Props {
  independence: string
}

export function AttrIndependence({ independence }: Props) {
  const theme = useTheme()

  return (
    <AttrContainer>
      <div className="icons">
        <BracketsSquare
          size={20}
          weight="bold"
          color={theme.colors['blue-600']}
        />
      </div>

      <Text>{independence}</Text>
    </AttrContainer>
  )
}
