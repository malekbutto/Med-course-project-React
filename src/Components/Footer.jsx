import { Room } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    font-weight: bold;
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
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

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo></Logo>
                <Desc>
                    Visit us on:
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                       <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    UseFul Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Acount</ListItem>
                    <ListItem>Sweets</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Pastries</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Other Products</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>1006/21 , Nazareth-Israel, 1650100
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+972 52-474-1860
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+972 4-667-5170
                </ContactItem>
        <Payment src="https://i.ibb.co./Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;
