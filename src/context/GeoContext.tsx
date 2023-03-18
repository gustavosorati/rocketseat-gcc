import { ICitiesDTO, ICitysRequest } from '@/interfaces/Cities'
import { IStateDTO, IStatesRequest } from '@/interfaces/State'
import { api } from '@/utils/api'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface GeoProviderProps {
  children: ReactNode
}

interface GeoContextDTO {
  states: IStateDTO[] | []
  cities: ICitiesDTO[] | []
  pets: []
  getCities: (stateUF: string) => Promise<void>
  getPets: (city: string) => Promise<void>
}

export const GeoContext = createContext<GeoContextDTO>({} as GeoContextDTO)

export const GeoProvider = ({ children }: GeoProviderProps) => {
  const [states, setStates] = useState<IStateDTO[]>([])
  const [cities, setCities] = useState<ICitiesDTO[]>([])
  const [pets, setPets] = useState<[]>([])

  async function getStates() {
    console.log('GET STATES => ')
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
    console.log('GET CITIES => ')

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

  async function getPets(city: string) {
    console.log('GET PETS => ')

    console.log(`/pets/${city}`)
    try {
      const response = await api.get(`/pets/${city}`)

      console.log(response.data.pets)
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
