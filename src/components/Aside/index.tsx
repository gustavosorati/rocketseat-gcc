import { useContext, useState } from 'react'
import { GeoContext } from '@/context/GeoContext'

import { Select } from '@/components/Select'
import { Button } from '../Button'

import logo from '@/assets/icons/logo.svg'

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

interface Props {
  stateDefault?: string
  cityDefault?: string
  type: string
}

export function Aside({ stateDefault, cityDefault, type }: Props) {
  const { states, cities, getCities, getPets } = useContext(GeoContext)

  const [state, setState] = useState(stateDefault || '')
  const [city, setCity] = useState(cityDefault || '')

  const [age, setAge] = useState('')
  const [energy, setEnergy] = useState('')
  const [size, setSize] = useState('')
  const [independency, setIndependency] = useState('')

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
      let params = ''
      params += age && `age=${age}`
      params += energy && `&energy=${energy}`
      params += size && `&size=${size}`
      params += independency && `&independency=${independency}`
      params += type && `&type=${type}`

      console.log(params)
      const query = params ? `${city}?${params}` : city
      await getPets(query)
    } catch (error) {}
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img className="logo" src={logo} alt="" />
          <HeaderInput>
            <Select
              label=""
              name="state"
              placeholder="UF"
              value={state}
              options={states}
              variant="secondary"
              updateValue={handleChangeState}
            />

            <Select
              label=""
              name="state"
              placeholder="Selecione"
              value={city}
              options={cities}
              variant="secondary"
              updateValue={handleChangeCity}
            />

            <Button
              type="button"
              disabled={!state || !city}
              onClick={handleSearchPets}
            />
          </HeaderInput>
        </div>
      </AsideHeader>

      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            placeholder="Escolha a idade"
            value={age}
            options={ageOptions}
            updateValue={async (e) => {
              setAge(e)
            }}
          />

          <Select
            name="energy"
            label="Nível de energia"
            placeholder="Escolha a energia"
            options={energyOptions}
            variant="primary"
            value={energy}
            updateValue={async (e) => {
              setEnergy(e)
            }}
          />

          <Select
            name="size"
            label="Porte do animal"
            placeholder="Escolha o porte"
            options={sizeOptions}
            value={size}
            updateValue={async (e) => {
              setSize(e)
            }}
          />

          <Select
            name="independency"
            label="Nível de independência"
            placeholder="Escolha a independência"
            options={independencyOptions}
            value={independency}
            updateValue={async (e) => {
              setIndependency(e)
            }}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
