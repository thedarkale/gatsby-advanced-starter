import React, { useEffect } from "react"
import styled from "styled-components"
import leaf from "/static/leaf.svg"

import Social from "../Social"
import Promotion from "../Promotion"

const Container = styled.header`
  width: 100%;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: min(5vw, 40px);
  position: relative;
`
const Logo = styled.a`
  color: #657067;
  font-family: Poppins;
  font-size: min(7vw, 50px);
  font-weight: 300;
  z-index: 1;
  text-decoration: none;
`

const Nav = styled.nav`
  background-color: #E4EAEE;
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
  border-top: 2px solid #FC3F80;
  @media (min-width: 1200px) {
    border-left: 2px solid ${props => props.left ? "#FC3F80" : "#E4EAEE"};
    border-right: 2px solid ${props => props.right ? "#FC3F80" : "#E4EAEE"};
  }
`

const Img = styled.img`
  max-width: 400px;
  width: calc(30px + 45vw);
  margin-top: max(-8vw, -70px);
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 790px) {
    display: none;
  }
`

const Header = () => {
  return (
    <Container>
      <Heading>
        <Info>
          <Social />
          <Promotion />
        </Info>
        <Logo href="/">thedarkale</Logo>
      </Heading>
      <Nav>
        <LeafContainer>
          <Space left />
          <Leaf>
            <Img src={leaf} alt="leaf" />
          </Leaf>
          <Space right />
        </LeafContainer>
        {/* <Menu />
        <Categories /> */}
      </Nav>
    </Container>
  )
}

export default Header
