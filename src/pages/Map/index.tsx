import { useContext } from 'react'
import { GeoContext } from '@/context/GeoContext'
import { useLocation } from 'react-router-dom'

import { Aside } from '~/Aside'
import { Card } from '~/Card'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles'

interface IStateLocationProps {
  city: string
  uf: string
}

export function Map() {
  const { pets } = useContext(GeoContext)

  const location = useLocation()
  const state = location.state as IStateLocationProps

  return (
    <Container>
      <Aside stateDefault={state.uf} cityDefault={state.city} />

      <Content>
        <Header>
          <p>
            Encontre <span>{pets.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect name="size" id="size">
              <option value="all">Gatos e Cachorros</option>
              <option value="cats">Gatos</option>
              <option value="dogs">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {pets &&
            pets.map((pet) => (
              <Card
                key={pet.id}
                path={pet.photo_url}
                type={pet.type}
                name={pet.name}
              />
            ))}
        </Display>
      </Content>
    </Container>
  )
}
// function handleFilterByPetType() {
//   // TO DO
// }
