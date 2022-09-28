import React from 'react'
import styled from 'styled-components'

const Navbar = () => {

    const Container = styled.div `
        height: 60px;
    `;

    const Wrapper = styled.div`
        display: flex;
        padding: 10px 20px;
    `

    const Left = styled.div``
    const Center = styled.div``
    const Right = styled.div``

  return (
    <Container>
        <Wrapper>
            <Left>Left</Left>
            <Center>Center</Center>
            <Right>Right</Right>
         navbar
        </Wrapper> 
    </Container>
  )
}

export default Navbar