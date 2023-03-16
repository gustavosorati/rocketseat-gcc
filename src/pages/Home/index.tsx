import { Container, Content, Left, Right } from './styles'
import logoSvg from '../../assets/icons/logo.svg'
import { Button } from '@/components/Button'
import { FormEvent, useEffect, useState } from 'react'
import { api } from '@/utils/api'
import { IStateDTO, IStatesRequest } from '@/interfaces/State'
import { Select } from '@/components/Select'
import { ICitiesDTO, ICitysRequest } from '@/interfaces/Cities'

export function Home() {
  const [states, setStates] = useState<IStateDTO[]>([])
  const [cities, setCities] = useState<ICitiesDTO[]>([])

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  // const [pets, setPets] = useState<[]>([])

  async function getStates() {
    console.log('GET STATES =>')
    try {
      const response = await api.get<IStatesRequest>('/location/states')

      const treatedStatesResponse = response.data.states.map((state) => {
        return {
          label: state.sigla,
          value: state.sigla,
        }
      })

      setStates(treatedStatesResponse)
    } catch (error) {
      console.log(error)
    }
  }

  async function getCities(stateUF: string) {
    try {
      const response = await api.get<ICitysRequest>(
        `/location/citys/${stateUF}`,
      )

      const treatedCitiesResponse = response.data.citys.map((city) => {
        return {
          label: city.name,
          value: city.name,
        }
      })

      setCities(treatedCitiesResponse)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleChangeState(stateUF: string) {
    setState(stateUF)

    await getCities(stateUF)
  }

  function handleChangeCity(city: string) {
    setCity(city)
  }

  async function handleSearchPets() {
    if (!state || !city) return

    try {
      console.log(city)
      const response = await api.get(`/pets/${city}`)

      console.log(response)
      // const treatedCitiesResponse = response.data.states.map(
      //   (state: IStateDTO) => {
      //     return {
      //       label: state.sigla,
      //       value: state.sigla,
      //     }
      //   },
      // )

      // setStates(treatedCitiesResponse)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await handleSearchPets()
  }

  useEffect(() => {
    getStates()
  }, [])

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
            Leve <br /> a felicidade <br /> para o seu lar
          </h1>

          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </Left>

        <Right>
          <img className="dogs" src="/dogs.png" alt="" />

          <form onSubmit={handleSubmit}>
            <Select
              name="state"
              label="Busque um amigo:"
              defaultText="UF"
              options={states}
              variant="tertiary"
              update={handleChangeState}
            />

            <Select
              label=""
              name="state"
              defaultText="Escolha a cidade"
              options={cities}
              variant="secondary"
              update={handleChangeCity}
            />

            <Button disabled={!state || !city} />
          </form>
        </Right>
      </Content>
    </Container>
  )
}
