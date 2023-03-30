import { useOrganization } from '@/hooks/userOrganization'
import { DefaultLayout } from '@/layouts'
import { Login } from '@/pages/Login'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export default function ProtectedRoutes() {
  const { organizationToken } = useOrganization()

  return organizationToken ? <Navigate to="/" /> : <Outlet />
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/pet/:petId" element={<PetDetails />} />
      </Route>
    </Routes>
  )
}
