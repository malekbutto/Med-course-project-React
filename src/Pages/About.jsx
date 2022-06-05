import Footer from "../Components/Footer";
import { Container, Wrapper, Title, TopTitle } from '../Styled_Components/About_Styled';

const About = ({ user, setUser, cart, setCart, handleChange }) => {

    return (
        <div>
            <Container>
                <Wrapper>
                    <TopTitle>About the website</TopTitle>
                    <Title>
                        * This website is for our great shop. <br />
                        * We make some kinds of food (Sweets, Pastries and other tasty things). <br />
                        * All the product are HomeMade. <br />
                        * We make this foods, sincerely for more than 20 years.<br />
                    </Title>
                </Wrapper>
            </Container>
            <Footer user={user} setUser={setUser} cart={cart} setCart={setCart} handleChange={handleChange} />
        </div>
    )
}

export default About;