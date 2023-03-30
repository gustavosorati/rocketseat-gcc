import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
} from './styles'

import LogoHorizontal from '../../assets/icons/logo-title.svg'
import pets from '../../assets/dogs.png'
import Eye from '../../assets/icons/password-eye.svg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useOrganization } from '@/hooks/userOrganization'

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginForm = z.infer<typeof loginFormSchema>

export function Login() {
  const { register, handleSubmit } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  })
  const navigate = useNavigate()
  const { login } = useOrganization()

  async function handleLogin(body: LoginForm) {
    await login(body)
  }

  function handleRegisterOrganization() {
    navigate('/register')
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={pets} alt="" />
        </Card>

        <FormWrapper>
          <h1>Boas-vindas!</h1>

          <Form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                id="email"
                placeholder="Email"
                {...register('email')}
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
                id="password"
                placeholder="Senha"
                {...register('password')}
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Login
              </Button>
              <Button
                type="button"
                onClick={handleRegisterOrganization}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
