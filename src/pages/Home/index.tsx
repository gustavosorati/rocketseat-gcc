import { Container, Content, Left, Right, SelectStateFilter } from './styles'
import logoSvg from '../../assets/icons/logo.svg'
import { SelectState } from '@/components/SelectState'
import { Select } from '@/components/Select'
import { Aside } from '@/components/Aside'
import { Button } from '@/components/Button'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <Content>
        <Left>
          <header>
            <img
              src={logoSvg}
              alt="Imagem de da caricatura do rosto de um cachorro"
            />
            <h3>FindAFriend</h3>
          </header>

          <h1>
            Leve <br /> a felicidade <br /> para o seu lar
          </h1>

          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </Left>

        <Right>
          <img className="dogs" src="/dogs.png" alt="" />

          <form>
            <SelectState label="Busque um amigo:" name="state" options={[]} />

            <Select label="" name="city" options={[]} variant="secondary" />

            <Button />
          </form>
        </Right>
      </Content>
    </Container>
  )
}
