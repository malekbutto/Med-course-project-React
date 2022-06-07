import { React, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Info, Details, Price, Title, Container, Circle,
         Image, Icon } from '../Styled_Components/Product_Styled';

const Product = ({ item, handleAddToCart }) => {

    const [productImage, setProductImage] = useState();

    useEffect(() => {
        if (item.img.includes('fakepath'))
            setProductImage('./Images/Category/No_Image.jpeg');
        else
            setProductImage(item.img);
    }, [productImage]);

    return (
        <Container bg={item.bg}>
            <Circle>
                <Image src={productImage} alt='ProductImage' />
                <Info>
                    <Icon onClick={() => handleAddToCart(item)}>
                        <ShoppingCartOutlined />
                    </Icon>
                </Info>
                <Details>
                    <Price>
                        {item.price} nis
                    </Price>
                    <Title>
                        {item.title}
                    </Title>
                </Details>
            </Circle>
        </Container >
    )
}

export default Product;