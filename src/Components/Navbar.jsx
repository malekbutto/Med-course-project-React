import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
//import { styled } from "@material-ui/styles";
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    text-align: center;
    background-color: lightgrey;
    font-family: sans-serif;
    display: flex;
    height: 100px;
`;

const Wrapper = styled.div`
    margin: auto;
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
    margin: 5px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    width: 200px;
    height: 30px;
    placeholder: "Search";
`;

const Center = styled.div`
    flex: 1;
    margin: auto;
    text-align: center;
    width: 100%;
    height: 60px;
`;
const Logo = styled.h1`
    margin: 0px 200px;
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
                    <img src="../Images/Logo.JPG" alt="Logo" height="120px" width="120px"/>
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