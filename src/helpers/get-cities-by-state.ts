import { ICitysRequest } from '@/interfaces/Cities'
import { api } from '@/services/http'
import { AxiosError } from 'axios'

export async function getCitiesByState(state: string) {
  try {
    const { data } = await api.get<ICitysRequest>(`/location/citys/${state}`)

    const response = data.citys.map((city) => {
      return {
        label: city.name,
        value: city.name,
      }
    })

    return response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message)
    }

    console.log('Aconteceu um problema ao buscas os estados')
  }
}
