import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
    width: 90vw;
    height: 90vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("../images/Logo/Logo-AboutPage.JPG")
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    width: 70%;
    padding: 20px;
    ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
`;
export const TopTitle = styled.h1`
    font-weight: 600;
    text-align: center;
`;