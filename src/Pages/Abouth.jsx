import MainLayout from "../Components/layout/MainLayout";
import { OnDivH3 , OnDivSpan , Img ,AboutUS } from "../Components/styled"
import FooterImg from '../images/Group 28.png'
import AboutImg from '../images/Abouthimg.svg'
import styled from "styled-components";

const About = () => {
  return (
    <MainLayout>
       <AboutUS>
                <AboutInfo>
                    <LeftContent>
                        <OnDivH3>About Our Company</OnDivH3>  
                        <OnDivSpan>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                           We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact.
                           We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                        </OnDivSpan>
                    </LeftContent>
                    <div>
                        <ToImg src={AboutImg} />
                    </div>
                </AboutInfo>
                <Img src={FooterImg} />  
            </AboutUS>
    </MainLayout>
  );
};

const ToImg = styled.img`
  width: 100%;
  height: 99%;
  object-fit: cover;

`
const AboutInfo = styled.div`
position: absolute;
display: flex;
justify-content: space-between;
width: 100%;
padding-left: 70px;
`

const LeftContent = styled.div`
  width: 400px;
  position: relative;
  top: 160px;

`
export default About;