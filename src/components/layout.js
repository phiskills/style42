import React from "react"
import PropTypes from "prop-types"
import Helmet from "./helmet"
import Header from "./header"
import './all.sass'
import SEO from "./seo"
const Layout = ({ children}) => {
  return (
    <>
      {/*<SEO title="Home" />*/}
      <Helmet/>
        <div className="container is-fluid">
          <Header/>
          {children}
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
