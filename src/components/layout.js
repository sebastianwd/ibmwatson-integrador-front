import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { WatsonProvider } from "../components/_context/WatsonContext"

import "../scss/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <WatsonProvider>
      <div className="container">
        <main>{children}</main>
        <footer style={{ position: "fixed", bottom: "0", padding: "1rem" }}>
          ©Sebastian Luque
        </footer>
      </div>
    </WatsonProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
