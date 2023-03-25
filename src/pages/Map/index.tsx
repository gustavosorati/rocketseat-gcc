import { useContext, useState } from 'react'
import { GeoContext } from '@/context/GeoContext'
import { useLocation } from 'react-router-dom'

import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import * as Styled from './styles'

interface IStateLocationProps {
  city: string
  uf: string
}

export function Map() {
  const { pets } = useContext(GeoContext)

  const location = useLocation()
  const state = location.state as IStateLocationProps

  const [type, setType] = useState('')

  console.log(pets)
  return (
    <Styled.Container>
      <Aside type={type} stateDefault={state.uf} cityDefault={state.city} />

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
