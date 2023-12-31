import Logo from '../images/Oval.svg'
import FooterImg from '../images/Group 28.png'
import { Nav , Ul , LogoDiv, Button ,} from './styled';
import FaceboookImg from '../socImg/facebook.svg'
import youtubeImg from '../socImg/youtube.svg'
import twitterImg from '../socImg/twitter.svg'
import PasImg from '../socImg/Pas.svg'
import InstagramImg from '../socImg/Instagram.svg'
import SocialImg from "../Links";
import { Link } from 'react-router-dom';
import {SocialLinks , FootDiv  , FootTitle , Img ,
  Line , FootSection , FootMainDiv , OnDiv , 
  OnDivInfo , OnDivH3 ,OnDivSpan , LeftContent , About , CompanyInfo} from  '../Components/styled'


const MainFooter = () => {
    
    return (
     <FootSection>
        <FootMainDiv>
            <OnDiv>
                <OnDivInfo>
                    <LeftContent>
                        <OnDivH3>Let’s talk about you</OnDivH3>  
                        <OnDivSpan>Ready to take it to the next level? Contact us today and find out 
                        how our expertise can help your business grow.
                        </OnDivSpan>
                    </LeftContent>
                    <div>
                        <Button>GET IN TOUCH</Button>
                    </div>
                </OnDivInfo>
                <Img alt='footerImg' src={FooterImg} />  
            </OnDiv>
            <FootDiv>
        <LogoDiv>
          <img alt='Logoimg' src={Logo} >
          </img>
          <FootTitle>DESIGNO</FootTitle>
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
      </FootDiv>
      <Line> </Line>
        <CompanyInfo>
            <About>
                    <span>
                    Designo Central Office
                    3886 Wellington Street Toronto, Ontario M9C 3J5
                    </span>
                </About>
                <About>
                    <span>
                    Contact Us (Central Office)P : +1 253-863-8967
                    M : contact@designo.co
                    </span>
                </About>
        </CompanyInfo>

            <SocialLinks>
            <SocialImg src={FaceboookImg} link="https://www.facebook.com" />
            <SocialImg src={youtubeImg} link="https://www.youtube.com" />
            <SocialImg src={twitterImg} link="https://twitter.com" />
            <SocialImg src={PasImg} link="https://example.com" />
            <SocialImg src={InstagramImg} link="https://www.instagram.com" />
            </SocialLinks>
        </FootMainDiv>
     </FootSection>
    )
}

export default MainFooter