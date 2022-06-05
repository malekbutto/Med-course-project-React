import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
    width: 90vw;
    height: 90vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("../images/Logo/Logo-LoginPage.JPG")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #f5fbfd;
    ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #797EAB;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;