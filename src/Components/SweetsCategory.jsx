import { sweets } from '../data'
import styled from "styled-components";
import Sweets from './Sweets';
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

const SweetsCategory = () => {
  return (
    <div>
        <Title>The Sweets</Title>
    <Container>
      {sweets.map(item=>(
          <Sweets item={item} key={item.id}/> 
      ))}
    </Container>
    <Footer />
    </div>
  )
}
export default SweetsCategory;