import React from "react"
import styled from "styled-components"
import leaf from "/static/leaf.svg"

const Container = styled.header`
  max-width: 1200px;
  width: 100%;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`
const Logo = styled.span`
  color: #657067;
  font-family: Poppins;
  font-size: min(7vw, 50px);
  font-weight: 300;
`

const Nav = styled.nav`
  background-color: #F8F8F8;
  padding: 50px;
  position: relative;
`

const LeafContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

const Leaf = styled.div`
  height: 100%;
`

const Space = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #FC3F80;
`

const Img = styled.img`
  max-width: 400px;
  width: calc(30px + 45vw);
  margin-top: -70px;
`

const Header = () => {
  return (
    <Container>
      <Heading>
        <Logo>thedarkale</Logo>
        {/* <Social />
        <Logo />
        <Promotion /> */}
      </Heading>
      <Nav>
        <LeafContainer>
          <Space></Space>
          <Leaf>
            <Img src={leaf} alt="leaf" />
          </Leaf>
          <Space></Space>
        </LeafContainer>
        {/* <Menu />
        <Categories /> */}
      </Nav>
    </Container>
  )
}

export default Header
