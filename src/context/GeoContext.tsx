import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '@/utils/api'

import { IPets, IRequestPets } from '@/interfaces/IPets'
import { ICity, ICitysRequest } from '@/interfaces/Cities'
import { IStateDTO, IStatesRequest } from '@/interfaces/State'

interface GeoProviderProps {
  children: ReactNode
}

interface GeoContextDTO {
  states: IStateDTO[] | []
  cities: ICity[] | []
  pets: IPets[] | []
  getCities: (stateUF: string) => Promise<void>
  getPets: (city: string) => Promise<void>
}

export const GeoContext = createContext<GeoContextDTO>({} as GeoContextDTO)

export const GeoProvider = ({ children }: GeoProviderProps) => {
  const [states, setStates] = useState<IStateDTO[]>([])
  const [cities, setCities] = useState<ICity[]>([])
  const [pets, setPets] = useState<IPets[]>([])

  async function getStates() {
    try {
      const { data } = await api.get<IStatesRequest>('/location/states')

      const responseStates = data.states.map((state) => {
        return {
          label: state.sigla,
          value: state.sigla,
        }
      })

      setStates(responseStates)
    } catch (error) {
      console.log(error)
    }
  }

  async function getCities(stateUF: string) {
    try {
      const { data } = await api.get<ICitysRequest>(
        `/location/citys/${stateUF}`,
      )

      const responseCities = data.citys.map((city) => {
        return {
          label: city.name,
          value: city.name,
        }
      })

      setCities(responseCities)
    } catch (error) {
      console.log(error)
    }
  }

  async function getPets(city: string) {
    console.log('GET PETS => ')

    try {
      const response = await api.get<IRequestPets>(`/pets/${city}`)

      setPets(response.data.pets)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getStates()
  }, [])

  return (
    <GeoContext.Provider
      value={{
        states,
        cities,
        pets,
        getCities,
        getPets,
      }}
    >
      {children}
    </GeoContext.Provider>
  )
}
