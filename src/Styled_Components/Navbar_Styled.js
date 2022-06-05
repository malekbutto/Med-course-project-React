import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
    height: 100px;        
    ${mobile({ height: "50px", alignItems: "center" })}
    background-color: #f5fbfd;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    padding: 0px 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
    flex: 1;    
    display: flex;
    align-items: left;
    text-align: center;
    justify-content: left;
    width: 100%;
    padding: 0px 20px;
    margin: 10px;
`;
export const LogoLeft = styled.div`
    margin: auto;
    font-weight: bold;
    ${mobile({ fontSize: "24px", display: "none" })}
`;
export const LogoCenter = styled.div`
    margin: auto;
    font-weight: bold;
    display: none;
    ${mobile({ fontSize: "24px", display: "flex" })}
`;
export const LeftCenter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-evenly;
    padding: 0px 50px;
    width: 100%;
`;
export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 100px;
    ${mobile({ display: "flex" })}
`;
export const MiddleButton = styled.div`
    ${mobile({ display: "none" })}
`;
export const RightCenter = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 20%;
    padding: 0px 100px;
    font-size: 24px;
    font-weight: 600;
    ${mobile({ display: "none", flex: "0" })}
`;
export const AddProduct = styled.div`

`;
export const EditProduct = styled.div`

`;
export const DeleteProduct = styled.div`

`;
export const AllOrders = styled.div`

`;
export const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    text-align: right;
    justify-content: center;
    ${mobile({ justifyContent: "center" })}
    width: 100%;
    margin: 0px 20px;
`;
export const MenuItem = styled.div`
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 20px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    padding: 5px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const SignInOut = styled.div`

`;
export const SpanMyShop = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;
export const CartDiv = styled.div`
    cursor: pointer;
`;
export const SpanKid1 = styled.span`
    font-size: 2rem;
`;
export const SpanKid2 = styled.span`
    padding: 0 3px;
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    top: -15px;
`;