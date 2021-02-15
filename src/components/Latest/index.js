import React from "react"
import styled from "styled-components"

import Card from "../Card"
import { SectionHeader, SectionFooter } from "../Section"

const Container = styled.section`
	margin: 1.5rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Latest = () => {
  return (
  	<div style={{ margin: "1.5rem" }}>
  		<SectionHeader name="Latest" />
		    <Container>
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
	    		<Card
	    			link="#"
	    			title="Expectation VS Reality: A look back at Bihar Elections"
	    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
	    			imgSrc="https://source.unsplash.com/random"
	    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
	    			author="Saud Ansari" />
		    </Container>
			<SectionFooter link="#" />
  	</div>
  )
}

export default Latest
