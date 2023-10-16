import styled from 'styled-components';

export const Header = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
padding: 50px;
max-width: 1920px;
margin: 0 auto;
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