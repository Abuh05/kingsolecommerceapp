import { Search } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {Badge} from "@material-ui/core"
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
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
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;

  const Logo = styled.h1`
    font-weight: bold;
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
  `;

  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
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
