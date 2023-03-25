import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'

import logoSvg from '../../assets/icons/logo.svg'

import { Container, Content, Header, Banner } from './styles'
import { Select } from '@/components/Select'
import { IGenericStateAndCitys } from '@/interfaces/State'
import { getStates } from '@/helpers/get-states'
import { getCitiesByState } from '@/helpers/get-cities-by-state'

export function Home() {
  const navigate = useNavigate()
  const [states, setStates] = useState<IGenericStateAndCitys[]>([])
  const [cities, setCities] = useState<IGenericStateAndCitys[]>([])

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  // const [, setParams] = useSearchParams()

  async function handleChangeState(uf: string) {
    setState(uf)

    const response = await getCitiesByState(uf)

    if (response) {
      setCities(response)
    }
  }

  async function handleChangeCity(city: string) {
    setCity(city)
  }

  async function handleSearchPets() {
    if (!state || !city) return

    // setParams({
    //   uf: state,
    //   city,
    // })
    navigate(`/map?uf=${state}&city=${city}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStates()

      if (response) {
        setStates(response)
      }
    }

    fetchData()
  }, [])

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
