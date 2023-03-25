import * as Styled from './styles'
import { Slider } from '@/components/Slider'
import { Text } from '@/components/Text'
import { IPet, IPetGallery } from '@/interfaces/IPets'
import { api } from '@/services/http'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from '@/components/Heading'
import { GeoMap } from '@/pages/PetDetails/components/GeoMap'
import { Requirements } from './components/Requirements'
import { useTheme } from 'styled-components'
import { Organization } from './components/Organization'
import { Attributes } from './components/Attributes'
import { WhatsappLogo } from 'phosphor-react'

interface IRequetPet {
  pet: IPet
}

interface IRequetGallery {
  pet_gallery: IPetGallery[]
}

export function PetDetails() {
  const { colors } = useTheme()
  const { petId } = useParams()
  const [pet, setPet] = useState<IPet>({} as IPet)
  const [gallery, setGallery] = useState<IPetGallery[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getPetDetails = async () => {
      try {
        setLoading(true)
        const responseDetails = await api.get<IRequetPet>(`/pets/show/${petId}`)

        const responseGallery = await api.get<IRequetGallery>(
          `/pets/gallery/${petId}`,
        )

        setPet(responseDetails.data.pet)
        setGallery(responseGallery.data.pet_gallery)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getPetDetails()
  }, [petId])

  if (isLoading) return <p>Carregando</p>

  return (
    <Styled.Container>
      <Text color={colors['gray-200']} mt="40px" size="18px">
        Seu novo amigo
      </Text>

      <Styled.Card>
        <Slider gallery={gallery} />

        <Styled.Content>
          <Heading as="h1" mb="26px">
            {pet.name}
          </Heading>
          <Text size="18px" weight={600}>
            {pet.description}
          </Text>

          <Attributes
            energy={pet.energy}
            independence={pet.independence}
            size={pet.size}
          />

          <GeoMap cep={pet.org.cep} />

          <Styled.Separator />

          <Organization organization={pet.org} />

          <Styled.Separator />

          <Requirements petId={pet.id} />

          <Styled.Separator />

          <Styled.Contact
            to={`https://api.whatsapp.com/send?phone=${pet.org.whatsappNumber}`}
          >
            <WhatsappLogo size={20} /> Entrar em contato
          </Styled.Contact>
        </Styled.Content>
      </Styled.Card>
    </Styled.Container>
  )
}
