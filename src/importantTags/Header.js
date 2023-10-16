import Logo from '../images/Oval.svg'
import { Header , Nav , Ul , Li , LogoDiv , Title} from '../StyledComponents/styled';
const MainHeader = () => {
    
    return (
        <Header>
        <LogoDiv>
          <img src={Logo} >
          </img>
          <Title>DESIGNO</Title>
        </LogoDiv>
        <Nav>
          <Ul>
            <Li>
              OUR COMPANY
            </Li>
            <Li>
              LOCATIONS
            </Li>
            <Li>
              CONTACTS
            </Li>
          </Ul>
        </Nav>
      </Header>
    )
}

export default MainHeader