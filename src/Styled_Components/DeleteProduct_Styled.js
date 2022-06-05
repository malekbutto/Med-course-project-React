import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
    width: 90vw;
    height: 90%;
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
    ${mobile({ width: "75%", height: "20vw" })}
`;
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    ${mobile({ height: "30%", margin: "auto", justifyContent: "center" })}
`;
export const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
export const Option = styled.option`
    font-size: 14px;
    fontFamily: arial,
    font-size: 14px;
    font-weight: 600;
`;
export const PFP = styled.div`
    margin: auto;
    align-items: center;
    justify-content: center;
`;
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #797EAB;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 50%;
    margin: auto;
`;
export const FooterDiv = styled.div`
    ${mobile({ display: "none" })}
`;