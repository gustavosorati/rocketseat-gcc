import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { api } from '@/services/http'
import { getStates } from '@/helpers/get-states'
import { getCitiesByState } from '@/helpers/get-cities-by-state'
import { buildQuery, buildQueryParams } from '@/helpers/build-query-params'

import { IGenericStateAndCitys } from '@/interfaces/State'
import { IPets, IRequestPets } from '@/interfaces/IPets'

import { Select } from '@/components/Select'
import { Button } from '@/components/Button'

import logo from '@/assets/icons/logo.svg'

import * as Styled from './styles'

import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from './schemas/options-schema'

interface Props {
  type: string
  updatePets: (pets: IPets[]) => void
}

export function Aside({ type, updatePets }: Props) {
  const [search] = useSearchParams()

  const [states, setStates] = useState<IGenericStateAndCitys[]>([])
  const [statesLoaded, setStatesLoaded] = useState(false)

  const [cities, setCities] = useState<IGenericStateAndCitys[]>([])
  const [citiesLoaded, setCitiesLoaded] = useState(false)

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const [filters, setFilters] = useState({
    age: '',
    energy: '',
    size: '',
    independency: '',
  })

  async function handleChangeState(uf: string) {
    const response = await getCitiesByState(uf)

    if (response) {
      setState(uf)
      setCities(response)
    }
  }

  async function handleChangeCity(city: string) {
    setCity(city)
  }

  async function handleSearchPets() {
    if (!state || !city) return

    try {
      const params = buildQueryParams(filters, type)
      const query = buildQuery(city, params)

      const response = await api.get<IRequestPets>(`/pets/${query}`)
      const pets = response.data.pets

      updatePets(pets)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(error.message)
      }
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStates()

      if (response) {
        setStates(response)
        setStatesLoaded(true)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (statesLoaded) {
      const getCities = async () => {
        const searchUF = search.get('uf')

        if (searchUF) {
          setState(searchUF)
          const response = await getCitiesByState(searchUF)

          if (response) {
            setCities(response)
            setCitiesLoaded(true)
          }
        }
      }
      getCities()
    }
  }, [search, statesLoaded])

  useEffect(() => {
    if (citiesLoaded) {
      const searchCity = search.get('city')

      if (searchCity) {
        setCity(searchCity)

        api.get<IRequestPets>(`/pets/${searchCity}`).then((response) => {
          const pets = response.data.pets

          updatePets(pets)
        })
      }
    }
  }, [citiesLoaded, search, updatePets])

  return (
    <Styled.Container>
      <Styled.AsideHeader>
        <div>
          <img className="logo" src={logo} alt="" />
          <Styled.HeaderInput>
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
              name="city"
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
          </Styled.HeaderInput>
        </div>
      </Styled.AsideHeader>

      <Styled.AsideContent>
        <Styled.ContentHeader>Filtros</Styled.ContentHeader>
        <Styled.ContentFilters>
          <Select
            name="age"
            label="Idade"
            placeholder="Escolha a idade"
            value={filters.age}
            options={ageOptions}
            updateValue={async (e) => {
              const updatedFilters = { ...filters, age: e }
              setFilters(updatedFilters)
            }}
          />

          <Select
            name="energy"
            label="Nível de energia"
            placeholder="Escolha a energia"
            options={energyOptions}
            variant="primary"
            value={filters.energy}
            updateValue={async (e) => {
              const updatedFilters = { ...filters, energy: e }
              setFilters(updatedFilters)
            }}
          />

          <Select
            name="size"
            label="Porte do animal"
            placeholder="Escolha o porte"
            options={sizeOptions}
            value={filters.size}
            updateValue={async (e) => {
              const updatedFilters = { ...filters, size: e }
              setFilters(updatedFilters)
            }}
          />

          <Select
            name="independency"
            label="Nível de independência"
            placeholder="Escolha a independência"
            options={independencyOptions}
            value={filters.independency}
            updateValue={async (e) => {
              const updatedFilters = { ...filters, independency: e }
              setFilters(updatedFilters)
            }}
          />
        </Styled.ContentFilters>
      </Styled.AsideContent>
    </Styled.Container>
  )
}
