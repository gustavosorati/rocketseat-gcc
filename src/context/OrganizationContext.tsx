import { api } from '@/services/http'
import { AxiosError } from 'axios'
import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

interface ILoginDTO {
  email: string
  password: string
}

interface IContextProps {
  organizationToken: string
  login: ({ email, password }: ILoginDTO) => Promise<void>
  logout: () => void
}

export const OrganizationContext = createContext<IContextProps>(
  {} as IContextProps,
)

interface Props {
  children: ReactNode
}

export const OrganizationProvider = ({ children }: Props) => {
  const [organizationToken, setOrganizationToken] = useState(() => {
    const token = localStorage.getItem('@org')

    return token ?? ''
  })

  async function login({ email, password }: ILoginDTO) {
    try {
      const response = await api.post('/auth/sessions', {
        email,
        password,
      })

      const bearerToken = `Bearer ${response.data.token}`

      setOrganizationToken(response.data.token)
      api.defaults.headers.common.Authorization = bearerToken
      localStorage.setItem('@org', JSON.stringify(response.data))

      toast.success(`Login efetuado com sucesso!`)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.error}`)
      } else {
        toast.error(`Aconteceu um erro inesperado, tente novamente mais tarde`)
      }
    }
  }

  function logout() {
    localStorage.removeItem('@org')
    setOrganizationToken('')
  }

  return (
    <OrganizationContext.Provider value={{ organizationToken, login, logout }}>
      {children}
    </OrganizationContext.Provider>
  )
}
