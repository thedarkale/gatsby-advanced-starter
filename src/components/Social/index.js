import React from "react"
import styled from "styled-components"

import { IconContext } from "react-icons"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 50px;
`

const Icons = styled.div`
	display: flex;
	flex-direction: row;
`

const Icon = styled.a`
	padding: 10px;
`

const Text = styled.span`
	color: #657067;
	font-size: .9rem;
`

const settings = {
	color: "#657067", 
	size: "1.5rem"
}

const Social = () => {
  return (
    <Container>
      <Text>FOLLOW THEDARKALE</Text>
      <Icons>
				<IconContext.Provider value={settings}>
					<Icon href="https://facebook.com/thedarkaleblog"><FaFacebookF /></Icon>
					<Icon href="https://twitter.com/thedarkaleblog"><FaTwitter /></Icon>
					<Icon href="https://instagram.com/thedarkale"><FaInstagram /></Icon>
				</IconContext.Provider>      
			</Icons>
    </Container>
  )
}

export default Social
