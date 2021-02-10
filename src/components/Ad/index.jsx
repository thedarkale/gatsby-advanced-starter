import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
  font-size: 0.7rem;
`

const Ad = () => {
  return (
    <Container>
      <span>ADVERTISEMENT</span>
    </Container>
  )
}

export default Ad
