import React, { useEffect } from "react"
import styled from "styled-components"
import leaf from "/static/leaf.svg"

import Social from "../Social"
import Promotion from "../Promotion"
import Menu from "../Menu"
import Categories from "../Categories"

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
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: min(7vw, 50px);
  z-index: 1;
  text-decoration: none;
`

const Navigation = styled.div`
  background-color: #f0f6fa;
  height: min(20vw, 120px);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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
  @media (min-width: 1200px) {
    border-left: 1px solid ${props => props.left ? "#FC3F80" : "#f0f6fa"};
    border-right: 1px solid ${props => props.right ? "#FC3F80" : "#f0f6fa"};
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
      <Navigation>
        <LeafContainer>
          <Space left />
          <Leaf>
            <Img src={leaf} alt="leaf" />
          </Leaf>
          <Space right />
        </LeafContainer>
        <Menu />
        <Categories />
      </Navigation>
    </Container>
  )
}

export default Header
