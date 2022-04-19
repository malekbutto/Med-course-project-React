import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Footer from "../Components/Footer";


const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;

`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option`

`;



const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Sweets</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Product
            </Option>
            <Option>Sweets</Option>
            <Option>Pastries</Option>
            <Option>Other Products</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Personal Size</Option>
            <Option>Family Size</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  )
}

export default ProductList;
