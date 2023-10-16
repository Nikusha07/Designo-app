import Logo from '../images/Oval.svg'
import { Header , Nav , Ul , Li , LogoDiv , Title} from './styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const MainHeader = () => {
    
    return (
        <Header>
        <LogoDiv>
          <img src={Logo} >
          </img>
          <Link to='/'> <Title>DESIGNO</Title> </Link>
        </LogoDiv>
        <Nav>
          <Ul>
            <Link to='/home'>
              OUR COMPANY
            </Link>
            <Link>
              LOCATIONS
            </Link>
            <Link>
              CONTACTS
            </Link>
          </Ul>
        </Nav>
      </Header>
    )
}
export default MainHeader