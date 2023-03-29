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
import pets from 'public/dogs.png'
import Eye from '../../assets/icons/password-eye.svg'

export function Login() {
  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={pets} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input type="text" name="email" id="email" placeholder="Email" />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Login
              </Button>
              <Button type="button" onClick={() => {}} className="secondary">
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}

// function handleLogin() {
//   // TO DO
// }

// function handleRegisterOrganization() {
//   // TO DO
// }
