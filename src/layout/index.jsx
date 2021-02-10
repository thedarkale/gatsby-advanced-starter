import React from "react"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

import Ad from "../components/Ad"
import Header from "../components/Header"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
	  box-sizing: border-box;
	}

	html {
	  height: 100%;
	}

	body {
	  margin: 0;
	  padding: 0;
	  min-height: 100%;
	  min-width: 100%;
	  font-family: Montserrat;
	  /* background-color: #FFF8FA; */
	}

	#___gatsby #gatsby-focus-wrapper {
	  min-height: 100vh;
	  min-width: 100vw;
	}
`

const LayoutContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
`

export default function MainLayout({ children }) {
  return (
  	<>
			<GlobalStyle theme="light" />
			<Ad />
	    <Header />
	    <LayoutContainer>
	      <Helmet>
	        <meta name="description" content={config.siteDescription} />
	        <html lang="en" />
	      </Helmet>
	      {children}
	    </LayoutContainer>
  	</>
  );
}
