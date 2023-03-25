import { Heading } from '@/components/Heading'
import { api } from '@/services/http'
import { Info } from 'phosphor-react'
import { useEffect, useState } from 'react'
import * as Styled from './styles'

interface Props {
  petId: string
}

interface IRequeriments {
  id: string
  petId: string
  title: string
}

export function Requirements({ petId }: Props) {
  const [requirements, setRequirements] = useState<IRequeriments[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        setIsLoading(true)
        const response = await api.get(`/pets/adoption-requirements/${petId}`)

        setRequirements(response.data.adoption_requirements)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getCoordinates()
  }, [petId])

  return (
    <Styled.Container>
      <Heading as="h3" size="30px" weight={700} mb="30px">
        Requesitos para adoção
      </Heading>

      {isLoading ? (
        <p>Carregando</p>
      ) : (
        requirements.map((requirement) => (
          <Styled.RequirementCard key={requirement.id}>
            <Info size={24} weight="regular" />
            {requirement.title}
          </Styled.RequirementCard>
        ))
      )}
    </Styled.Container>
  )
}
