import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { GlobalStyle } from "../components/Common"
import styled from "styled-components"

const Page = styled.main`
  width: 80%;
  max-width: 770px;
  margin: 15px auto 0px auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Page>{children}</Page>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
