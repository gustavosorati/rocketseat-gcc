import { IStatesRequest } from '@/interfaces/State'
import { api } from '@/services/http'
import { AxiosError } from 'axios'

export async function getStates() {
  try {
    const { data } = await api.get<IStatesRequest>('/location/states')

    const response = data.states.map((state) => {
      return {
        label: state.sigla,
        value: state.sigla,
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
