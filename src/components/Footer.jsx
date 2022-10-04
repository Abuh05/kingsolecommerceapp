import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;

    `;
    const Logo = styled.h1`
    `
    const Desc = styled.p`
        margin: 20px 0px;
    `
    const SocailContainer = styled.h1`
    display: flex;
    `
    const SocialIcon = styled.div`
        width: 40px;
        height:40px;
        border-radius:50%;
        color: white;
        background-color: #${props=> props.color};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    `


const Center = styled.div`
    flex: 1;
    padding: 20px;
    
    `;
const Title = styled.h3`
    margin-bottom: 30px;
   ` ;
const List = styled.ul`
margin:0;
padding: 0;
list-style: none;
flex-wrap: wrap;
display:flex;
   `;
   const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
   `;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    `;
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;

 
`
const Payment = styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>kingus</Logo>
            <Desc>There are many variations of passages of designs available. You can shop here and get all your ite,s 
                delievered to you.
            </Desc>
            <SocailContainer>
                <SocialIcon  color="3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon  color="00acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon  color="0e76a8">
                    <LinkedIn />
                </SocialIcon>  
            </SocailContainer>
        </Left>
    <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Review</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight: "10px"}}/>622 Airford Road Yenagoa, Nigeria</ContactItem>
        <ContactItem>
            <Phone style={{marginRight: "10px"}}/>
            +234 081 336 176 66
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight: "10px"}} />
            info@kingus.co
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Right>
    </Container>
  )
}

export default Footer