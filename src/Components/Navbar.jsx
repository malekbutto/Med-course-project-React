import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
//import { styled } from "@material-ui/styles";
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    text-align: center;
    background-color: darkgrey;
    font-family: sans-serif;
    display: flex;
    height: 100px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    text-align: center;
    height: 60px;
    justify-content: flex-start;
`;
// const Language = styled.div`
//     font-size: 14px;
//     cursor: pointer;
// `
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    width: 200px;
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    width: 200px;
    placeholder: "Search";
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    width: 100%;
    height: 60px;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    height: 60px;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language> */}
                    <SearchContainer>
                        <Input />
                        <Search style={{color: "grey", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                    <img src="../Images/Logo.JPG" alt="Logo" height="100px" width="300px"/>
                        Welcome to Sweets & More HomePage
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        Login
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={3} color="secondary" >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;