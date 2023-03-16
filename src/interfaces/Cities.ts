interface ICity {
  name: string
  code: string
}

export interface ICitysRequest {
  citys: ICity[]
}

export interface ICitiesDTO {
  label: string
  value: string
}
