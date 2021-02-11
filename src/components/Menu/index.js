import React, { useState } from "react"
import styled from "styled-components"

import { IconContext } from "react-icons"
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

const Container = styled.div`
	z-index: 1;
`

const Button = styled.button`
	padding: 7px 14px;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	background-color: #E4EAEE;
	top: 100%;
	left: 0;
	display: ${props => props.checked ? "flex" : "none"};
	border-left: 2px solid #FC3F80;
	border-right: 2px solid #FC3F80;
`
const settings = {
	color: "#657067", 
	size: "calc(1rem + min(3vw, 1rem))"
}

const Menu = () => {
	const [checked, setChecked] = useState(false)
  return (
    <Container>
    	<Button onClick={() => setChecked(!checked)}>
				<IconContext.Provider value={settings}>
					{checked
						? <IoMdClose />
						: <FiMenu />
					}
				</IconContext.Provider> 
    	</Button>
    	<Nav checked={checked}>
    		<span>hi</span>
    	</Nav>
    </Container>
  )
}

export default Menu
