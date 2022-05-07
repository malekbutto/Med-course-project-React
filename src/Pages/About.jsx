import styled from "styled-components";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { Facebook, Instagram } from "@material-ui/icons";


const Container = styled.div`
    width: 90vw;
    height: 90vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("../images/Logo-AboutPage.JPG")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 70%;
    padding: 20px;

    ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
`;
const Desc = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0px;
    text-align: center;
`;
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const About = () => {

    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>
                        * This website is for our great shop. <br />
                        * We make some kinds of food (Sweets, Pastries and other tasty things). <br />
                        * All the product are HomeMade. <br />
                        * We make this foods, sincerely for more than 20 years.<br />
                    </Title>
                    <Desc>
                    Find us on:
                </Desc>
                <SocialContainer>
                    <a href="https://www.facebook.com/Sweets-more-by-Um-Anas-1742962809327410">
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                    </a>
                    <a href="https://www.instagram.com/um.anas.sweets/">
                        <SocialIcon color="E4405F">
                            <Instagram />
                        </SocialIcon>
                    </a>
                </SocialContainer>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default About;