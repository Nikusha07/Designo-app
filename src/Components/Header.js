import Logo from '../images/Oval.svg'
import { Header , Nav , Ul , LogoDiv , Title} from './styled';
import { Link } from 'react-router-dom';
const MainHeader = () => {
    
    return (
        <Header>
        <LogoDiv>
          <img alt='Logoimg' src={Logo} >
          </img>
          <Link to='/'> <Title>DESIGNO</Title> </Link>
        </LogoDiv>
        <Nav>
          <Ul>
            <Link to='/home'>
              OUR COMPANY
            </Link>
            <Link to = '/location'>
              LOCATIONS
            </Link>
            <Link to= '/contact'>
              CONTACTS
            </Link>
          </Ul>
        </Nav>
      </Header>
    )
}
export default MainHeader