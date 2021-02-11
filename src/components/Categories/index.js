import React from "react"
import styled from "styled-components"

const Container = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1;
  color: #657067;
  @media (max-width: 550px) {
	  overflow: scroll;
  }  
`

const Section = styled.div`
	padding: .7rem 1.3rem;
	font-size: calc(.7em + min(.3vw, .7rem));
`

const Text = styled.span`
	font-weight: 500;
	padding-bottom: 6px;
	border-bottom: ${props => props.focus ? "5px solid #FC3F80" : "none"};
`

const Categories = () => {
  return (
    <Container>
    	<Section>
    		<Text>Home</Text>
    	</Section>
    	<Section>
	      <Text>Music</Text>
    	</Section>
     	<Section>
	      <Text focus>News</Text>
    	</Section>
     	<Section>
	      <Text>Lifestyle</Text>
    	</Section>
     	<Section>
	      <Text>Health</Text>
    	</Section>
     	<Section>
	      <Text>Science</Text>
    	</Section>
    </Container>
  )
}

export default Categories
