import { phoneFormatter } from '@/helpers/formatter'

import { IOrg } from '@/interfaces/Org'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

import * as Styled from './styles'
import { WhatsappLogo } from 'phosphor-react'

interface Props {
  organization: IOrg
}

export function Organization({ organization }: Props) {
  const phoneNumber = organization.whatsappNumber.replace('+', '')

  return (
    <Styled.Container>
      <div className="left">
        <img src="/logo.svg" alt="" />
      </div>

      <div className="right">
        <Heading as="h3" size="30px" weight={700}>
          {organization.nome}
        </Heading>
        <Text size="16px" weight={600} mb="16px">
          {organization.address}
        </Text>

        <Styled.Contact
          to={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
          className="btn-whats"
        >
          <WhatsappLogo size={24} weight="fill" />
          <Text size="18px" weight={600}>
            {phoneFormatter(phoneNumber)}
          </Text>
        </Styled.Contact>
      </div>
    </Styled.Container>
  )
}
