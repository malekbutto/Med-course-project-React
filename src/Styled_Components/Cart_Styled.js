import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
     
`;
export const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;
export const Title = styled.h1`
    font-weight: 600;
    text-align: center;
`;
export const TopText = styled.h1`
    margin: 0px 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
export const Info = styled.div`
    flex: 3;
`;
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;
export const ProductDetail = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 200;
`;
export const Image = styled.img`
    width: 200px;
`;
export const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin: 20px;
`;
export const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    padding: 10px;
    ${mobile({ margin: "5px 15px" })}
`;
export const ProductPrice = styled.div`
    display: flex;
    flex-direction: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
    padding: 20px;
`;
export const Hr = styled.hr`
    background-color: #eee;
    width: 100%;
    border: 0.5px solid gray;
`;
export const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`;
export const SummaryTitle = styled.h1`
    font-weight: 200;
`;
export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span`
    flex: 1;
    font-size: 24px;
    font-weight: 600;
`;
export const SummaryItemPrice = styled.span`
    flex: 1;
    font-size: 24px;
    font-weight: 600;
`;
export const Button = styled.button`
    width: 100%;
    padding: 10px;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 600;
    '&:hover' {
        color: red
    };
`;