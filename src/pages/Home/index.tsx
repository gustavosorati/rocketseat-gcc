import { useNavigate } from 'react-router-dom'
import { GeoContext } from '@/context/GeoContext'
import { FormEvent, useContext, useState } from 'react'

import { Button } from '@/components/Button'
import { Select } from '@/components/Select'

import logoSvg from '../../assets/icons/logo.svg'

import { Container, Content, Left, Right } from './styles'

export function Home() {
  const { states, cities, getCities, getPets } = useContext(GeoContext)

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  async function handleChangeState(stateUF: string) {
    setState(stateUF)

    await getCities(stateUF)
  }

  async function handleChangeCity(city: string) {
    setCity(city)
  }

  async function handleSearchPets() {
    if (!state || !city) return

    try {
      await getPets(city)
    } catch (error) {}
  }

  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await handleSearchPets()

    navigate(`/map`, {
      state: {
        uf: state,
        city,
      },
    })
  }

  return (
    <Container>
      <Content>
        <Left>
          <header>
            <img
              src={logoSvg}
              alt="Imagem de da caricatura do rosto de um cachorro"
            />
            <h3>FindAFriend</h3>
          </header>

          <h1>
            Leve <br />
            a felicidade <br />
            para o seu lar
          </h1>

          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </Left>

        <Right>
          <img className="dogs" src="/dogs.png" alt="" />

          <form onSubmit={handleSubmit}>
            <Select
              name="state"
              label="Busque um amigo:"
              placeholder="UF"
              options={states}
              value={state}
              updateValue={handleChangeState}
              variant="tertiary"
            />

            <Select
              label=""
              name="state"
              placeholder="Escolha a cidade"
              options={cities}
              value={city}
              updateValue={handleChangeCity}
              variant="secondary"
            />

            <Button disabled={!state || !city} />
          </form>
        </Right>
      </Content>
    </Container>
  )
}
