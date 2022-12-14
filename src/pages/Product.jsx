import { Add, RemoveCircle } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { Mobile } from "../responsive"


const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display: flex;
    ${Mobile({padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${Mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    Font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 50px 0px;
display: flex;
justify-content: space-between;
${Mobile({width: "100%"})}

`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle= styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 3px;
cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterOption = styled.option`

`

const AddContainer = styled.div`
width:50%;
display:flex;
align-items: center;
justify-content: space-between;
${Mobile({width: "100%"})}

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImgContainer>
            <InfoContainer>
                <Title>Janny T-Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eum ad a sequi reiciendis. Accusamus maxime ut facere
                      est tenetur similique?
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveCircle />
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
      <Newsletter/>
      <Footer />
    </Container>
  )
}

export default Product