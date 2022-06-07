import styled from "styled-components";

export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
export const Details = styled.div`
    opacity: 0;
    width: 150%;
    height: 100%;
    position: relative;
    top: 40;
    left: 40;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 2;
    display: inline;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    color: black;
    font-size: 30px;
    font-weight: 600;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    color: black;
    font-size: 14px;
    font-weight: 600;
`;
export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${(props) => props.bg};  
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    },
    &:hover ${Details} {
        opacity: 1;
    }
`;
export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
export const Image = styled.img`
    border-radius: 50px;
    height: 28vh;
    width: 100%;
    z-index: 2;
`;
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;