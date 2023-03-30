import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
  InputError,
} from './styles'

import pets from '../../assets/dogs.png'
import EyeHidden from '../../assets/icons/password-eye.svg'
import Eye from '../../assets/icons/password.svg'
import LogoHorizontal from '../../assets/icons/logo-title.svg'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cepFormatter, inputPhoneFormatter } from '@/helpers/formatter'
import { api } from '@/services/http'
import { ChangeEvent, useState } from 'react'
import { GeoMap } from './components/GeoMap'

const registerFormSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    cep: z.string().min(9),
    address: z.string().min(5),
    contact: z.string().min(13),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ['password', 'confirmPassword'], // path of error
  })

type RegisterForm = z.infer<typeof registerFormSchema>

export function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)

  async function handleRegisterOrganization(body: RegisterForm) {
    try {
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
  }

  const cep = watch('cep') ?? ''

  console.log(errors)
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
            <div>
              <label htmlFor="name">Nome</label>
              <InputWrapper error={errors.name?.message}>
                <input
                  type="text"
                  id="name"
                  placeholder="Informe o seu nome"
                  {...register('name')}
                />
              </InputWrapper>
              <InputError>{errors.name?.message}</InputError>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <InputWrapper error={errors.email?.message}>
                <input
                  type="text"
                  id="email"
                  placeholder="Informe o seu email"
                  {...register('email')}
                />
              </InputWrapper>
              <InputError>{errors.email?.message}</InputError>
            </div>

            <div>
              <label htmlFor="cep">CEP</label>
              <InputWrapper error={errors.cep?.message}>
                <input
                  type="text"
                  id="cep"
                  maxLength={9}
                  placeholder="XXXXX-XXX"
                  {...register('cep', {
                    onChange: handleRenderMapLocation,
                  })}
                />
              </InputWrapper>
              <InputError>{errors.cep?.message}</InputError>
            </div>

            <div>
              <label htmlFor="address">Endereço</label>
              <InputWrapper error={errors.address?.message}>
                <input
                  type="text"
                  id="address"
                  placeholder="Rua do Meio, 1825"
                  {...register('address')}
                />
              </InputWrapper>
              <InputError>{errors.address?.message}</InputError>
            </div>

            {cep.length === 9 && <GeoMap cep={cep} />}

            <div>
              <label htmlFor="contact">Whatsapp</label>
              <InputWrapper error={errors.contact?.message}>
                <input
                  type="text"
                  id="contact"
                  placeholder="99 99999 9999"
                  maxLength={13}
                  {...register('contact', {
                    onChange: (e) => {
                      const formattedContact = inputPhoneFormatter(
                        e.target.value,
                      )
                      setValue('contact', formattedContact)
                    },
                  })}
                />
              </InputWrapper>
              <InputError>{errors.contact?.message}</InputError>
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <InputWrapper error={errors.password?.message}>
                <input
                  type={`${passwordVisible ? 'text' : 'password'}`}
                  id="password"
                  placeholder="Senha"
                  {...register('password')}
                />
                <img
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  src={`${passwordVisible ? EyeHidden : Eye}`}
                  alt=""
                />
              </InputWrapper>
              <InputError>{errors.password?.message}</InputError>
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <InputWrapper error={errors.confirmPassword?.message}>
                <input
                  type={`${confirmVisible ? 'text' : 'password'}`}
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  {...register('confirmPassword')}
                />
                <img
                  onClick={() => setConfirmVisible(!confirmVisible)}
                  src={`${confirmVisible ? EyeHidden : Eye}`}
                  alt=""
                />
              </InputWrapper>
              <InputError>{errors.confirmPassword?.message}</InputError>
            </div>

            <Buttons>
              <Button type="submit" className="primary">
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
