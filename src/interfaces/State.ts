interface IState {
  id: number
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
  sigla: string
}

export interface IStatesRequest {
  states: IState[]
}

export interface IStateDTO {
  label: string
  value: string
}

export interface IGenericStateAndCitys {
  label: string
  value: string
}
