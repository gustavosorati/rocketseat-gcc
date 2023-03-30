import { OrganizationContext } from '@/context/OrganizationContext'
import { useContext } from 'react'

export function useOrganization() {
  const context = useContext(OrganizationContext)

  return context
}
