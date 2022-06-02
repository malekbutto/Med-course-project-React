import { Room } from "@material-ui/icons";
import { Phone } from "@material-ui/icons";
import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({ margin: "auto"})}
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
    align-items: center;
    text-align: left;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
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

const Footer = ({user, setUser, cart, setCart, handleChange}) => {

    const navigate = useNavigate();

    useEffect(()=>{
    },[user])


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
                    <ListItem><Link to="/CategoryDetails" url="http://localhost:3000/sweets" title="The Sweets" target={"_top"}>Sweets</Link></ListItem>
                    <ListItem><Link to="/CategoryDetails" url="http://localhost:3000/pastries" title="The Pastries" target={"_top"}>Pastries</Link></ListItem>
                    <ListItem><Link to="/CategoryDetails" url="http://localhost:3000/ourCuisine" title="Our Cuisine" target={"_top"}>Our Cuisine</Link></ListItem>
                    <ListItem onClick={() => (user === undefined ?
                                            (
                                                navigate("/Login", user={user}, setUser={setUser})
                                                // <Link to="/Login" target={"_top"} />
                                            ) : (
                                                // <Link to="/Cart" target={"_top"} cart={cart} setCart={setCart} handleChange={handleChange} />
                                                navigate("/Cart", cart={cart}, setCart={setCart}, handleChange={handleChange} )
                                            ))}>Cart</ListItem>
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
