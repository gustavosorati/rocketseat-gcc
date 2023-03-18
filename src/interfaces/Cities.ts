export interface ICity {
  label: string
  value: string
}

export interface ICitysRequest {
  citys: {
    name: string
    code: string
  }[]
}
