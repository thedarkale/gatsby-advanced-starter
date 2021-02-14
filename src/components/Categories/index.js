import React from "react"
import styled from "styled-components"

const Container = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1;
  @media (max-width: 550px) {
		justify-content: flex-start;
	  overflow: auto;
  }  
`

const Section = styled.div`
	padding: .7rem 1.3rem;
	font-size: calc(.8rem + min(.3vw, .7rem));
`

const Category = styled.a`
	text-decoration: none;
  color: #657067;
	font-weight: ${props => props.focus ? "600" : "500"};
	padding-bottom: 6px;
	border-bottom: ${props => props.focus ? "5px solid #FC3F80" : "none"};
`

const Categories = () => {
  return (
    <Container>
    	<Section>
    		<Category href="/" focus>Home</Category>
    	</Section>
    	<Section>
	      <Category href="#">Music</Category>
    	</Section>
     	<Section>
	      <Category href="#">News</Category>
    	</Section>
     	<Section>
	      <Category href="#">Lifestyle</Category>
    	</Section>
     	<Section>
	      <Category href="#">Health</Category>
    	</Section>
     	<Section>
	      <Category href="#">Science</Category>
    	</Section>
    </Container>
  )
}

export default Categories
