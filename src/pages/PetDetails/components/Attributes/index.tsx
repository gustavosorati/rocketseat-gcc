import { AttrEnergy } from '@/components/Pet/Attributes/AttrEnergy'
import { AttrIndependence } from '@/components/Pet/Attributes/AttrIndependence'
import { AttrSize } from '@/components/Pet/Attributes/AttrSize'

import * as Styled from './styles'

interface Props {
  energy: 1 | 2 | 3 | 4 | 5
  independence: string
  size: string
}

export function Attributes({ energy, independence, size }: Props) {
  return (
    <Styled.Container>
      <AttrEnergy value={energy} />
      <AttrIndependence independence={independence} />
      <AttrSize size={size} />
    </Styled.Container>
  )
}
