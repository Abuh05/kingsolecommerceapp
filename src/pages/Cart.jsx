import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
`;

const TopBotton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"}
`
const Bottom = styled.div``
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
flex: 3;`

const Product = styled.div`
display: flex;
justify-content: space-between;

`
const ProductDetail = styled.div`
flex:2;
`
const Image = styled.img`
`
const Details = styled.div`
`
const PriceDetail = styled.span`
flex:1;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
`
const ProductSize = styled.span`
`

const Summary = styled.div`
 
flex: 1;
`


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
         <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopBotton>CONTINUE SHOPPING</TopBotton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopBotton type='filled'>CHECKOUT NOW</TopBotton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOE</ProductName>
                                <ProductId><b>ID:</b>2356584798</ProductId>  
                                <ProductColor/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>      
                                </Details> 
                        </ProductDetail>
                        <PriceDetail>
                            Price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary</Summary>
            </Bottom> 
         </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart