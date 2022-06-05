import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, GitHub, LinkedIn, Room, Phone } from "@material-ui/icons";
import { Container, Left, Desc, SocialContainer, SocialIcon,
         Center, Title, List, ListItem, Right, ContactItem } from '../Styled_Components/Footer_Styled';

const Footer = ({ user, setUser, cart, setCart, handleChange }) => {

    const navigate = useNavigate();

    useEffect(() => {
    }, [user])


    return (
        <Container>
            <Left>
                <Desc>
                    Follow us:
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
            </Left>
            <Center>
                <Title>
                    Site Map
                </Title>
                <List>
                    <ListItem onClick={() => navigate("/category/sweets")} title={"The Sweets"}>Sweets</ListItem>
                    <ListItem onClick={() => navigate("/category/pastries")} title={"The Pastries"}>Pastries</ListItem>
                    <ListItem onClick={() => navigate("/category/ourCuisine")} title={"Our Cuisine"}>Our Cuisine</ListItem>
                    <ListItem onClick={() => (user === undefined ?
                        (
                            navigate("/Login", user = { user }, setUser = { setUser })
                        ) : (
                            navigate("/Cart", cart = { cart }, setCart = { setCart }, handleChange = { handleChange })
                        ))}>Cart</ListItem>
                </List>
                <Desc>
                    Powered By: Malek Butto
                </Desc>
                <SocialContainer>
                    <a href="https://www.facebook.com/malek.butto/">
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                    </a>
                    <a href="https://www.instagram.com/malekbutto/">
                        <SocialIcon color="E4405F">
                            <Instagram />
                        </SocialIcon>
                    </a>
                    <a href="https://github.com/malekbutto/">
                        <SocialIcon color="333333">
                            <GitHub />
                        </SocialIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/malek-butto/">
                        <SocialIcon color="0A66C2">
                            <LinkedIn />
                        </SocialIcon>
                    </a>
                </SocialContainer>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />+972 52-379-2338
                </ContactItem>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />1006/21 , Nazareth-Israel, 1650100
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />+972 52-474-1860
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />+972 4-667-5170
                </ContactItem>
                {/* <Payment src="https://i.ibb.co./Qfvn4z6/payment.png" /> */}
            </Right>
        </Container >
    )
}

export default Footer;