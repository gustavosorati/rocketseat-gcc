import { Sidebar } from '@/components/Sidebar'
import { Outlet } from 'react-router-dom'
import * as Styled from './styles'

export function DefaultLayout() {
  return (
    <Styled.Container>
      <Sidebar />

      <Outlet />
    </Styled.Container>
  )
}
