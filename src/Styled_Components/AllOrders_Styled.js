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
    margin: auto;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #f5fbfd;
    ${mobile({ width: "75%", height: "20vw" })}
`;
export const Title = styled.h1`
    margin: auto;
    padding: 10px 0px;
    text-align: center;
    font-size: 24px;
    font-weight: 300;
`;
export const TableTitle = styled.div`
    font-size: 20px;
    font-weight: 300;
    padding: 5px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;
export const HeaderTitle = styled.div`
    font-size: 20px;
    font-weight: 300;
    padding: 20px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;
export const OrdersDetails = styled.div`
    display: flex;
    flex - direction: row;
    justify - content: space - between;
`;
export const Order = styled.div`
    padding: 10px;
    display: flex;
    flex - direction: row;
    justify - content: space - around;
`;