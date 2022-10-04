import { Search } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core"
import React from "react";
import styled from "styled-components";
import {Mobile} from '../responsive'

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    ${Mobile({height: "50px"})};
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    ${Mobile({padding: "10px 0px"})};
  `;

  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;

  const Input = styled.input`
    border: none;
    ${Mobile({width: "50px"})};
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({display: "none"})};
  `;

  const Logo = styled.h1`
    font-weight: bold;
    ${Mobile({fontSize: "20px"})};
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({flex: 2, justifyContent: "center", marginRight: "20px"})};
  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${Mobile({fontSize: "12px", marginLeft: "10px", marginRight: "5px"})};

  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"gray", fontSize:15}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Kingus.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
