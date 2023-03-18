import { useNavigate } from 'react-router-dom'
import { GeoContext } from '@/context/GeoContext'
import { useContext, useState } from 'react'

import { Button } from '@/components/Button'

import logoSvg from '../../assets/icons/logo.svg'

import { Container, Content, Header, Banner } from './styles'
import { Select } from '@/components/Select'

export function Home() {
  const navigate = useNavigate()
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

      navigate(`/map`, {
        state: {
          uf: state,
          city,
        },
      })
    } catch (error) {}
  }

  return (
    <Container>
      <Content>
        <Header>
          <div className="logo">
            <img
              src={logoSvg}
              alt="Imagem de da caricatura do rosto de um cachorro"
            />
            <h3>FindAFriend</h3>
          </div>

          <h1>
            Leve <br />
            a felicidade <br />
            para o seu lar
          </h1>

          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </Header>

        <Banner>
          <img className="dogs" src="/dogs.png" alt="" />

          <div className="footer">
            <Select
              name="state"
              label="Busque um amigo:"
              placeholder="UF"
              value={state}
              updateValue={handleChangeState}
              variant="tertiary"
              options={states}
            />

            <div style={{ flex: 1 }}>
              <Select
                label=""
                name="state"
                placeholder="Escolha a cidade"
                options={cities}
                value={city}
                updateValue={handleChangeCity}
                variant="secondary"
              />
            </div>

            <Button
              type="submit"
              onClick={handleSearchPets}
              disabled={!state || !city}
            />
          </div>
        </Banner>
      </Content>
    </Container>
  )
}
