import MainLayout from "../Components/layout/MainLayout";
import styled from "styled-components";
import '../Pages/404.css';

const PageNotFound = () =>{
    return (
        <MainLayout>
            <Container>
                <Paragraph>Sorry 👋 </Paragraph>
                <section className="animation">
                    <div class="first"><div>-This Page Not found-</div></div>
                    <div class="second"><div>Go Back</div></div>
                    <div class="third"><div>Good Lucky</div></div>
                </section>
            </Container>

         </MainLayout>
    );
}
const Container = styled.main`
    color: #e5e5e5;
    font-size: 2.26rem;
    text-transform: uppercase;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Paragraph = styled.p`
  color  : black ;
  text-shadow: 0 0 7px rgba(147, 147, 147, 0.3), 0 0 3px rgba(255,255,255,.3);  
`

export default PageNotFound