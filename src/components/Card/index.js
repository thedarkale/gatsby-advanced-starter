import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.article`
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
`

const Category = styled.span`
	font-weight: 500;
`

const Title = styled.span`
	font-weight: 600;
  font-size: calc(1rem + min(.3vw, .7rem));
`

const Description = styled.span`
  
`

const Author = styled.u`
  color: #657067;
  line-height: 3rem;
`

const Img = styled.img`
  height: 200px;
  object-fit: cover;
`

const Card = ({link, category, title, description, imgSrc, imgAlt, author}) => {
  return (
  	<Link to={link} style={{ textDecoration: "none", width: "100%" }}>
	    <Container>
	    	{imgSrc && <Img src={imgSrc} alt={imgAlt} />}
	    	<Category>{category}</Category>
	    	<Title>{title}</Title>
	    	<Description>{description}</Description>
	    	<Author>By {author}</Author>
	    </Container>
    </Link>
  )
}

export default Card

// https://alligator.io/html/picture-element/