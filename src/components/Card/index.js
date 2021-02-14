import React from "react"
import styled from "styled-components"

const Container = styled.article`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  margin: 15px 0 15px 0;
	max-width: 300px;
  @media (max-width: 900px) {
	  max-width: 100%;
  }		
`

const Category = styled.span`
  color: #657067;
	font-weight: 500;
`

const Title = styled.span`
	font-weight: 600;
  font-size: calc(1.2rem + .2vw);
  padding: 10px 0 10px 0;
`

const Description = styled.span`
  
`

const Author = styled.span`
  color: #657067;
  padding-top: 15px;
`

const Image = styled.div`
	width: 100%;
	height: 150px;
	background-color: gray;
`

const Link = styled.a`
	text-decoration: none;
	width: 100%;
	display: flex;
	justify-content: space-around;	
`

const Card = ({link, category, title, description, imgSrc, imgAlt, author}) => {
  return (
  	<Link href={link}>
	    <Container>
	    	{imgSrc && <Image></Image>}
	    	<Category>{category}</Category>
	    	<Title>{title}</Title>
	    	<Description>{description}</Description>
	    	<Author><u><i>By {author}</i></u></Author>
	    </Container>
    </Link>
  )
}

export default Card

// https://alligator.io/html/picture-element/