import React from "react"
import styled from "styled-components"

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

export { SectionHeader, SectionFooter }