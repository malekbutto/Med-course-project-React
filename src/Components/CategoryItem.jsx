import { useNavigate } from 'react-router-dom';
import {Info, Container, Image, Title, Button } from '../Styled_Components/CategoryItem_Styled';

const CategoryItem = ({ item }) => {
    
    const navigate = useNavigate();
    
    return (
        <Container>
            <Image src={item.img} alt='CategoryImage' />
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=>navigate(item.url)}>Watch</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;