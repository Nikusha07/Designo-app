import styled from 'styled-components';

export const Header = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
padding: 50px;
`

export const Nav = styled.nav`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 5px;

`

export const Ul = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
gap: 40px;
` 
export const Li = styled.li `
text-decoration: none;
cursor: pointer;
list-style: none;
&&:hover{
    scale: 105%;
    text-decoration: underline;
    text-shadow: 2px 2px 2px pink;
}
`

export const LogoDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const HomeSection = styled.section`
display: flex;
justify-content: center;
margin: 0 auto;
`

export const HomeDiv = styled.div`
width: 1111px;
height: 640px;
position: relative;

`
export const IntoDIv = styled.div`
display: flex;
padding-top: 150px;
flex-direction: column;
padding-left: 50px;
gap: 50px;
position: absolute;
width: 50%;
`

export const HomeH2 = styled.h2`
font-size: 48px;
color: white;
font-weight: 500;
line-height: 48px;
letter-spacing: 0px;
text-align: left;

`
export const HomeSpan = styled.span`
color: white;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0px;
text-align: left;

`
export const Button = styled.button`
width: 152px;
font-size: 15px;
border: none;
border-radius: 4px;
padding: 20px;
height: 56px;
cursor: pointer;
&&:hover{
    opacity: 0.6;
}
`
export const Title = styled.h1`
letter-spacing: 4px;

`
export const DesignSection = styled.section`
display: flex;
flex-direction: row;
padding-top: 150px;
margin: 0 auto;
gap: 20px;
width: 1112px;
height: auto;
`
export const MainBox = styled.div`
position: relative;
height: 100%;
width: 50%;
&&:hover{
    opacity: 0.7;
}
` 
export const MainBoxWrap = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

`
export const Child = styled.div`
position: relative;
&&:hover{
    opacity: 0.7;
}

`

export const InfoDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
gap: 10px;
flex-direction: column;
align-items: center;
position: absolute;
`
export const InfoSpan  = styled.span`
font-family: Jost;
font-size: 40px;
font-weight: 500;
line-height: 48px;
letter-spacing: 2px;
text-align: left;
color: white;

`

export const LiDiv = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const InfoLi = styled.li`
font-size: 15px;
color: white;
list-style: none;
cursor: pointer;
&&:hover{
  text-decoration: underline;
  text-shadow: #FC0 1px 0 10px;
}
`

export const ArrowImg = styled.img`
width: 10px;
height: 10px;
margin-top: 2px;
object-fit: cover;
`


export const SocialLinks = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 0;
bottom: 0;
gap: 10px;
padding-right: 150px;
padding-bottom: 20px;

`

export const FootDiv = styled.div`
display: flex;
justify-content: space-between;
`
export const FootLi = styled.li`
text-decoration: none;
list-style: none;
cursor: pointer;
color: white;
&&:hover{
    scale: 105%;
    text-decoration: underline;
    text-shadow: 2px 2px 2px pink;
}
`
export const FootTitle = styled.h1`
color: white;
letter-spacing: 4px;
`

export const Img = styled.img`
width: 100%;
height: 100%;
`

export const Line = styled.div`
width: 100%;
height: 1px;
margin-top: 20px;
background-color: #FFFFFF;
opacity: 10%;
`

export const FootSection = styled.section`
margin: 0 auto;
padding-top: 300px;
display: flex;
justify-content: center;

`

export const FootMainDiv = styled.div`
position: relative;
height: 400px;
width: 1440px;
padding: 150px;
background-color: black;
`

export const OnDiv = styled.div`
position: absolute;
display: flex;
top: -200px;
width: 1111px ;
height: 300px;
left: 50%;
transform: translateX(-50%);
border-radius: 17px;

`

export const OnDivInfo = styled.div`
padding: 80px;
position: absolute;
display: flex;
justify-content: space-between;
width: 100%;
top: 50%;
transform: translateY(-50%);
`

export const OnDivH3 = styled.h3`
font-family: Jost;
font-size: 40px;
margin-bottom: 20px;
font-weight: 500;
line-height: 40px;
letter-spacing: 0px;
color: white;
`
export const OnDivSpan = styled.span`
font-family: Jost;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0px;
color: white;

`

export const LeftContent = styled.div`
width: 400px;
`

export const About = styled.div`
margin-top: 40px;
width: 200px;
color: white;
`
export const CompanyInfo = styled.div`
display: flex;
gap: 150px;
`

export const AboutUS = styled.div`
position: relative;
display: flex;
width: 1111px ;
height: 480px;
left: 50%;
transform: translateX(-50%);
border-radius: 17px;
margin-bottom: 150px;
`
