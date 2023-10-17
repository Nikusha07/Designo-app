import styled from "styled-components";
import MainLayout from "../Components/layout/MainLayout";
import Canada from "../images/LocationCanada.svg"
import LocationDivImg from "../images/LocationDivImg.png"

const LocationLayout = () =>{
    return (
        <MainLayout>
            <LocationSection>
                <LocationBox>
                    <LocationInBoxLeft>
                        <LocationInfo>
                            <CityName>Canada</CityName>
                            <h5>Designo Central Office</h5>
                            <span>
                            3886 Wellington Street Toronto, 
                            Ontario M9C 3J5</span>
                        </LocationInfo>
                        
                    </LocationInBoxLeft>

                    <LocationInBoxRight>
                        
                    </LocationInBoxRight>    
                </LocationBox>
            </LocationSection>
            <LocationSection>
                <LocationBox>
                    <LocationInBoxLeft>
                        <LocationInfo>
                            <CityName>Canada</CityName>
                            <h5>Designo Central Office</h5>
                            <span>
                            3886 Wellington Street Toronto, 
                            Ontario M9C 3J5</span>
                        </LocationInfo>
                        
                    </LocationInBoxLeft>

                    <LocationInBoxRight>
                        
                    </LocationInBoxRight>    
                </LocationBox>
            </LocationSection>
            <LocationSection>
                <LocationBox>
                    <LocationInBoxLeft>
                        <LocationInfo>
                            <CityName>Canada</CityName>
                            <h5>Designo Central Office</h5>
                            <span>
                            3886 Wellington Street Toronto, 
                            Ontario M9C 3J5</span>
                        </LocationInfo>
                        
                    </LocationInBoxLeft>

                    <LocationInBoxRight>
                        
                    </LocationInBoxRight>    
                </LocationBox>
            </LocationSection>
        </MainLayout>
    )
}
const LocationSection = styled.section`
    margin: 0 auto;
    width: 1111px;
    margin-bottom: 50px;
   

`
const LocationBox = styled.div`
    height: 326px;
    display: flex;
    flex-direction: row;
    gap: 20px;
   
  
`
const LocationInBoxLeft = styled.div`
    width: 730px;
    padding: 60px;
    background-image: url(${LocationDivImg});

`
const LocationInBoxRight = styled.div`
    width: 350px;
    background-image: url(${Canada});
    border-radius: 9px ;
`
const CityName = styled.h3`
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0px;
    color: #E7816B;
    margin-bottom: 30px;

`
const LocationInfo = styled.div`
    width: 218px;
    display: flex;
    flex-direction: column;
    
`

export default LocationLayout