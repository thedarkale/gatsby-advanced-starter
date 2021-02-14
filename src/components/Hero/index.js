import React from "react"
import styled from "styled-components"

import Card from "../Card"

const Container = styled.section`
	margin: 0 1rem 1rem 1rem;
	column-gap: 1.5rem;
  @media (min-width: 900px) {
	  display: grid;
	  grid-template-areas: 
	    "popular cover cover cover cover"
	    "trendy trendy trendy trendy trendy";
  }  
  @media (min-width: 1200px) {
	  display: grid;
	  grid-template-areas: 
	    "popular cover cover cover trendy";
  }
`

const CoverBlogColumn = styled.div`
	grid-area: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PopularBlogColumn = styled.div`
	grid-area: popular;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TrendyBlogColumn = styled.div`
	grid-area: trendy;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div`
  border-top: 1px solid #FC3F80;
	width: 100%;
`

const Hero = () => {
  return (
    <Container>
    	<CoverBlogColumn>
    		<Card
    			link="#"
    			title="The Last Time you Watched 'Once Upon a Time in America', you didn't!"
    			description="One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come."
    			imgSrc="https://source.unsplash.com/random"
    			imgAlt="The Last Time you Watched 'Once Upon a Time in America', you didn't!"
    			author="Aniruddha Pandey" />
    	</CoverBlogColumn>
    	<PopularBlogColumn>
    		<Card
    			link="#"
    			category="MONEY"
    			title="Budgeting"
    			author="Yashwant Dubey" />
  			<Divider />
    		<Card
    			link="#"
    			category="MOVIE"
    			title="Creed Movie Review"
    			author="Soumyadeep Dubey" />
  			<Divider />
    		<Card
    			link="#"
    			category="AUTOMOBILE"
    			title="Emerging Retro Bikes in India"
    			author="Soumyadeep Dubey" />
  			<Divider />
    		<Card
    			link="#"
    			category="SCIENCE"
    			title="Piezoelectricity"
    			author="Siddharth Mandge" />
  			<Divider />
    		<Card
    			link="#"
    			category="LIFESTYLE"
    			title="Quarantine Life"
    			author="Siddharth Mandge" />
    	</PopularBlogColumn>
    	<TrendyBlogColumn>
    		<Card
    			link="#"
    			title="Expectation VS Reality: A look back at Bihar Elections"
    			imgSrc="https://source.unsplash.com/random"
    			imgAlt="Expectation VS Reality: A look back at Bihar Elections"
    			author="Saud Ansari" />
  			<Divider />
    		<Card
    			link="#"
    			title="Importance of Research in Education"
    			imgSrc="https://source.unsplash.com/random"
    			imgAlt="Importance of Research in Education"
    			author="Sarthuk Dutt" />
    	</TrendyBlogColumn>
    </Container>
  )
}

export default Hero
