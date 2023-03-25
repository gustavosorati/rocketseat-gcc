import { IOrg } from './Org'

export interface IPets {
  age: string
  city: string
  description: string
  energy: 1 | 2 | 3 | 4 | 5
  id: string
  independence: string
  name: string
  orgId: string
  photo: string
  photo_url: string
  size: string
  type: 'dog' | 'cat'
}

export interface IRequestPets {
  pets: IPets[]
}

export interface IPet {
  age: string
  city: string
  description: string
  energy: 1 | 2 | 3 | 4 | 5
  id: string
  independence: string
  name: string
  orgId: string
  photo: string
  photo_url: string
  size: string
  type: 'dog' | 'cat'
  org: IOrg
}

export interface IPetGallery {
  id: string
  image: string
  petId: string
  photo_url: string
}
