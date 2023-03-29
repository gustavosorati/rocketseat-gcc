import { DefaultLayout } from '@/layouts'
import { Login } from '@/pages/Login'
import { PetDetails } from '@/pages/PetDetails'
import { Register } from '@/pages/Register'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Map } from '../pages/Map'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      <Route element={<DefaultLayout />}>
        <Route path="/pet/:petId" element={<PetDetails />} />
      </Route>
    </Routes>
  )
}
