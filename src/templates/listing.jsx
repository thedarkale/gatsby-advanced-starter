import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../layout"
import Hero from "../components/Hero"
import Latest from "../components/Latest"
import PostListing from "../components/PostListing/PostListing"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import styled from "styled-components"

const ListingContainer = styled.main`
  min-height: 100%;
  min-width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`
const PagingContainer = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`

function Listing({ pageContext, data }) {
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <PagingContainer>
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? "/" : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </PagingContainer>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <ListingContainer>
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Hero />
          <Latest />
          <PostListing postEdges={postEdges} />
        </div>
        {renderPaging()}
      </ListingContainer>
    </Layout>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
