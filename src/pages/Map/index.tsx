import { useState } from 'react'

import * as Styled from './styles'
import { IPets } from '@/interfaces/IPets'
import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import { Card } from '@/components/Card'
import { Aside } from '@/components/Aside'

export function Map() {
  const [pets, setPets] = useState<IPets[]>([])
  const [type, setType] = useState('')

  return (
    <Styled.Container>
      <Aside type={type} updatePets={setPets} />

      <Styled.Content>
        <Styled.Header>
          <p>
            Encontre <span>{pets.length > 0 && pets.length} amigos</span> na sua
            cidade
          </p>
          <Styled.SelectWrapper>
            <Styled.HeaderSelect
              name="size"
              id="size"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </Styled.HeaderSelect>
            <img src={chevron} alt="" />
          </Styled.SelectWrapper>
        </Styled.Header>

        <Styled.Display>
          {pets &&
            pets.map((pet) => (
              <Card
                key={pet.id}
                id={pet.id}
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
              />
            ))}
        </Styled.Display>
      </Styled.Content>
    </Styled.Container>
  )
}
