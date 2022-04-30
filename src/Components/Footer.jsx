import { Room } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
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
    ${mobile({ display: "none" })}
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
    ${mobile({ backgroundColor: "#f5fbfd" })}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
// const Payment = styled.img`
//     width: 50%;
// `;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo></Logo>
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
                    UseFul Links
                </Title>
                <List>
                    <ListItem><a href="Home">Home</a></ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem><a href="SweetsCategory">Sweets</a></ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem><a href="PastriesCategory">Pastries</a></ListItem>
                    <ListItem><a href="About">About</a></ListItem>
                    <ListItem><a href="OtherCategory">Other Products</a></ListItem>
                </List>
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
