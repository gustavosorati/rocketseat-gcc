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

import pets from '../../assets/dogs.png'
import Eye from '../../assets/icons/password-eye.svg'
import LogoHorizontal from '../../assets/icons/logo-title.svg'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cepFormatter, inputPhoneFormatter } from '@/helpers/formatter'
import { api } from '@/services/http'
import { ChangeEvent, useState } from 'react'

const registerFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    cep: z.string().min(9),
    address: z.string(),
    contact: z.string().min(13),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  })

type RegisterForm = z.infer<typeof registerFormSchema>

export function Register() {
  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    setValue,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  })
  const [coordenates, setCoordanates] = useState('')

  async function handleRegisterOrganization(body: RegisterForm) {
    console.log(body)

    try {
      console.log('entrou')

      await api.post('/orgs', {
        name: body.name,
        email: body.email,
        cep: body.cep,
        address: body.address,
        whatsappNumber: `+${body.contact.replaceAll(' ', '')}`,
        password: body.password,
        passwordConfirm: body.confirmPassword,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRenderMapLocation(e: ChangeEvent<HTMLInputElement>) {
    const formattedCep = cepFormatter(e.target.value)
    setValue('cep', formattedCep)

    if (formattedCep.length === 9) {
      try {
        const response = await api.get(`/location/coordinates/${formattedCep}`)
        console.log(`/location/coordinates/${formattedCep}`)

        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={pets} alt="" />
        </Card>

        <FormWrapper>
          <h1>Cadastre sua organização</h1>

          <Form onSubmit={handleSubmit(handleRegisterOrganization)}>
            <label htmlFor="name">Nome</label>
            <InputWrapper>
              <input
                type="text"
                id="name"
                placeholder="Informe o seu nome"
                {...register('name')}
              />
            </InputWrapper>

            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                id="email"
                placeholder="Informe o seu email"
                {...register('email')}
              />
            </InputWrapper>

            <label htmlFor="cep">CEP</label>
            <InputWrapper>
              <input
                type="text"
                id="cep"
                maxLength={9}
                {...register('cep', {
                  onChange: handleRenderMapLocation,
                })}
              />
            </InputWrapper>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                id="address"
                placeholder="Rua do Meio, 1825"
                {...register('address')}
              />
            </InputWrapper>

            {/* mapa aqui */}
            {/*  */}

            <label htmlFor="contact">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                id="contact"
                placeholder="99 99999 9999"
                maxLength={13}
                {...register('contact', {
                  onChange: (e) => {
                    const formattedContact = inputPhoneFormatter(e.target.value)
                    setValue('contact', formattedContact)
                  },
                })}
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

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <InputWrapper>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirme sua senha"
                {...register('confirmPassword')}
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>

          <Link to="/login">Já possui conta?</Link>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
