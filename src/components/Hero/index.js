import React from "react"
import styled from "styled-components"

import Card from "../Card"

const Container = styled.section`
	margin: 0.5rem 1.5rem;
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
  flex-direction: column;

  @media (max-width: 1200px) {
	  flex-direction: row;
	  justify-content: space-around;
  }
  @media (max-width: 900px) {
	  flex-direction: column;
  }	
`

const Divider = styled.div`
  border-top: 1px solid #FC3F80;
	width: 100%;
  @media (max-width: 1200px) {
	  display: none;
  }
  @media (max-width: 900px) {
	  display: block;
  }	  
`

const ArticleBody = styled.div`
	padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.span`
	font-weight: 600;
  font-size: calc(1.2rem + .2vw);
  padding: 10px 0 10px 0;
`

const Description = styled.span`
  padding: 10px 0 10px 0;
`

const Author = styled.span`
  color: #657067;
  padding-top: 15px;
`

const Image = styled.div`
	background-color: gray;
	width: 100%;
	height: 350px;
`

const Link = styled.a`
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
`

const CoverArticle = styled.article`
  display: flex;
  flex-direction: column;
  color: black;
  max-width: 550px;
  margin: 15px 0 15px 0;
`

const SectionHeader = ({ name }) => {

	const Container = styled.div`
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  align-items: center;
	  width: 100%;
	  padding-top: 10px;
	  @media (max-width: 1200px) {
		  display: none;
	  }
	  @media (max-width: 900px) {
		  display: flex;
	  }	  
	`

	const Divider = styled.hr`
		border: none;
	  border-bottom: 7px double #FC3F80;
	  width: 100%;
	  flex: 1;
	`

	const Heading = styled.span`
		padding: 0 15px 0 15px;
		font-size: 1.5rem;
	`

	return (
		<Container>
			<Divider />
			<Heading>{ name }</Heading>
			<Divider />
		</Container>
	)
}

const SectionFooter = ({ link }) => {

	const Container = styled.a`
	  display: flex;
	  flex-direction: row;
	  justify-content: flex-end;
	  align-items: center;
	  width: 100%;
	  padding-top: 10px;
	  @media (max-width: 1200px) {
		  display: none;
	  }
	  @media (max-width: 900px) {
		  display: flex;
	  }
	  border-bottom: 1px solid #657067;
	`

	const Redirect = styled.a`
		font-size: 1rem;
		font-weight: 400;
		color: #657067;
		text-decoration: none;
	`

	return (
		<Container>
			<Redirect href={link}>MORE</Redirect>
		</Container>
	)
}

const Hero = () => {
  return (
    <Container>
    	<CoverBlogColumn>
		  	<Link href="#">
			    <CoverArticle>
			    	<Image></Image>
			    	<ArticleBody>
				    	<Title>The Last Time you Watched 'Once Upon a Time in America', you didn't!</Title>
				    	<Description>One Upon a Time in America even after 36 years still has some mysteries around it yet to be discovered. The movie never shown the way it was planned and a legacy for ages to come.</Description>
				    	<Author><u><i>By Aniruddha Pandey</i></u></Author>
			    	</ArticleBody>
			    </CoverArticle>
		    </Link>
    	</CoverBlogColumn>
    	<PopularBlogColumn>
    		<SectionHeader name="Popular" />
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
    		<SectionHeader name="Trendy" />
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
    		<SectionFooter link="#" />
    	</TrendyBlogColumn>
    </Container>
  )
}

export default Hero
