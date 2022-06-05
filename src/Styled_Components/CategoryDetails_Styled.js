import styled from "styled-components";
import { mobile } from "../responsive";

export const TopTitle = styled.h1`
    display: flex;
    font weight: 700;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
export const Container = styled.div`
    padding: 5px 0.5px;
    margin: 0px 5px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ display: "none" })}
`;
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => (props.slideIndex * -100)}vw);
`;
export const Slide = styled.div`
    width: 100vw;
    height: 85%;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;
export const ImgContainer = styled.div`
    height: 85%;
    flex: 1;
    padding: 80px;
`;
export const Image = styled.img`
    height: 85%;
    width: 100%;
    margin: 40px 5px;
`;
export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
export const Title = styled.h1`
    font-size: 70px;
`;
export const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
export const Price = styled.h1`
    font-size: 70px;
`;
export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;