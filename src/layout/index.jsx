import React from "react"
import { Helmet } from "react-helmet"
import config from "../../data/SiteConfig"

import Ad from "../components/Ad"
import Header from "../components/Header"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

	@charset "utf-8";

	*, *:before, *:after {
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
	  font-family: 'Montserrat', sans-serif;
	  /* background-color: #FFF8FA; */
	}

	#___gatsby #gatsby-focus-wrapper {
	  min-height: 100%;
	  min-width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
`

const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
`

const Root = styled.div`
  max-width: 1200px;
  width: 100%;
`

export default function MainLayout({ children }) {
  return (
  	<>
			<GlobalStyle theme="light" />
			<Ad />
	  	<Root>
		    <Header />
		    <LayoutContainer>
		      <Helmet>
		        <meta name="description" content={config.siteDescription} />
		        <html lang="en" />
		      </Helmet>
		      {children}
		    </LayoutContainer>
	  	</Root>

  	</>
  );
}
