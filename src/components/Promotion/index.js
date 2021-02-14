import React from "react"
import styled from "styled-components"
import promotion from "/static/promotion.jpeg"

const Container = styled.div`
	object-fit: cover;
	display: flex;
	flex-direction: row;
	align-items: center;
`

const Img = styled.img`
	height: 100px;
`

const Text = styled.div`
	color: #657067;
	font-size: .9rem;
	transform: rotate(-90deg);
	margin-left: -25px;
`

const Promotion = () => {
  return (
    <Container>
    	<a href="https://notionpress.com/read/our-days-a-survival-odyssey">
    		<Img src={promotion} alt="promotion cover" />
    	</a>
    	<Text><span>PROMOTION</span></Text>
    </Container>
  )
}

export default Promotion
