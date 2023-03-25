import { Text } from '@/components/Text'
import { Circle } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AttrContainer } from './styles'

interface Props {
  size: string
}

export function AttrSize({ size }: Props) {
  const theme = useTheme()

  const sizeTyped = size as 'small' | 'big' | 'medium'

  const properties = {
    small: {
      text: 'Pequenino',
      value: 1,
    },
    medium: {
      text: 'Normal',
      value: 2,
    },
    big: {
      text: 'Grande',
      value: 3,
    },
  }

  const inUseProperties = properties[sizeTyped]
  return (
    <AttrContainer>
      <div className="icons">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            {index >= inUseProperties?.value ? (
              <Circle
                size={20}
                weight="fill"
                color={'rgba(13, 59, 102, 0.1)'}
              />
            ) : (
              <Circle
                size={20}
                weight="fill"
                color={theme.colors['blue-600']}
              />
            )}
          </div>
        ))}
      </div>

      <Text>{inUseProperties?.text}</Text>
    </AttrContainer>
  )
}
