import styled from 'styled-components';


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