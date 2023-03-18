export interface IPets {
  age: string
  city: string
  description: string
  energy: number
  id: string
  independence: string
  name: string
  orgId: string
  photo: string
  photo_url: string
  size: string
  type: string
}

export interface IRequestPets {
  pets: IPets[]
}
