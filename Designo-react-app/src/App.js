import './App.css';
import MainHeader from './importantTags/Header'
import MainBoxImg from './images/Bitmap.png'
import PoneImg from './images/phone.svg'
import DivBackgroundImg from './images/Group 64 Copy.png'
import { HomeSection , HomeDiv , IntoDIv , HomeH2 , HomeSpan , Button , DesignSection , MainBox , MainBoxWrap , Child , InfoDiv , InfoSpan , LiDiv , InfoLi ,ArrowImg} from './StyledComponents/styled';
import ChildImg from './images/childimg.svg'
import Arrow from './images/Path 5.svg'
import MainFooter from './importantTags/Footer';

function App() {
  return (
    <div >
      <MainHeader/>
      <HomeSection>
        <HomeDiv>
          
          <IntoDIv>
            <HomeH2>
            Award-winning custom designs and digital branding solutions
            </HomeH2>
            <HomeSpan>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</HomeSpan>
            <Button>LEARN MORE</Button>
          </IntoDIv>
          <img src={DivBackgroundImg}/>
        </HomeDiv>
      </HomeSection>
      <DesignSection>
        <MainBox>
          <InfoDiv>
            <InfoSpan>
              WEB DESIGNE
            </InfoSpan>
            <LiDiv>
              <InfoLi>VIEW PROJECTS</InfoLi>
              <ArrowImg  src={Arrow} /> 
            </LiDiv>
          </InfoDiv>
          <img src={MainBoxImg}></img>
        </MainBox>

        <MainBoxWrap>
          <Child>
            <InfoDiv>
              <InfoSpan>
                APP DESIGNE
              </InfoSpan>
              <LiDiv>
                <InfoLi>VIEW PROJECTS</InfoLi>
                <ArrowImg  src={Arrow} /> 
              </LiDiv>
            </InfoDiv>
            <img src={PoneImg}></img>
          </Child>
          <Child>
            <InfoDiv>
              <InfoSpan>
                GRAPHIC DESIGNE
              </InfoSpan>
              <LiDiv>
                <InfoLi>VIEW PROJECTS</InfoLi>
                <ArrowImg  src={Arrow} /> 
              </LiDiv>
            </InfoDiv>
            <img src={ChildImg}></img>
          </Child>

        </MainBoxWrap>
      </DesignSection>
      <MainFooter/>
    </div>
  );
}

export default App;

