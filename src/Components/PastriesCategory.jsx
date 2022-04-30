import { pastries } from '../data'
import styled from "styled-components";
import Pastries from './Pastries';
import Navbar from './Navbar';
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

const PastriesCategory = () => {
  return (
    <div>
        <Navbar />
        <Title>The Pastries</Title>
    <Container>
      {pastries.map(item=>(
          <Pastries item={item} key={item.id}/> 
      ))}
    </Container>
    <Footer />
    </div>
  )
}
export default PastriesCategory;
