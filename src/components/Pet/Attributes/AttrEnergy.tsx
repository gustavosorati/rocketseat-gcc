import { Text } from '@/components/Text'
import { Lightning } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AttrContainer } from './styles'

interface Props {
  value: 1 | 2 | 3 | 4 | 5
}

export function AttrEnergy({ value }: Props) {
  const theme = useTheme()

  const message = {
    1: 'Dorminhoco',
    2: 'Calmo',
    3: 'Agitado',
    4: 'Muita Energia',
    5: 'Muita Energia',
  }

  return (
    <AttrContainer>
      <div className="icons">
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            {index >= value ? (
              <Lightning
                size={20}
                weight="fill"
                color={'rgba(13, 59, 102, 0.1)'}
              />
            ) : (
              <Lightning
                size={20}
                weight="bold"
                color={theme.colors['blue-600']}
              />
            )}
          </div>
        ))}
      </div>

      <Text>{message[value]}</Text>
    </AttrContainer>
  )
}

// const props = {
//   energy: {
//     text: ['Muita energia', 'Calmo'],
//     icon: <Lightning size={32} />,
//   },
//   size: {
//     text: 'Text' || 'text',
//     icon: 'x',
//   },
//   independence: {
//     text: 'Text' || 'Text',
//     icon: 'x',
//   },
// }

// const propInUse = props[type]
