import { other } from '../data'
import styled from "styled-components";
import Other from './Other';
import Footer from './Footer';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
    display: flex;
    font weight: 700;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

const OtherCategory = () => {
  return (
    <div>
        <Title>Other Products</Title>
    <Container>
      {other.map(item=>(
          <Other item={item} key={item.id}/> 
      ))}
    </Container>
    <Footer />
    </div>
  )
}
export default OtherCategory;
