import logoImg from '../../assets/logo.svg.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
           <img src={logoImg} alt="" />
           <button type='button'>
               Nova transação
            </button>
            </Content>
        </Container>
    )
}