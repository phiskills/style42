import React from "react"
import PropTypes from "prop-types"
import { CloudinaryContext } from "cloudinary-react"
import Helmet from "./helmet"
import Header from "./header"
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
const Layout = ({ children, logo }) => {

  console.log("process.env.GAD  scad,", process.env.GATSBY_CLOUDINARY_NAME)
  return (
    <>
      <Helmet/>
      <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME} secure={true}>
        <div className="container is-fluid">
          {/*<section className={"section"}>*/}
          <Header logo={logo}/>
          {children}
        </div>
      </CloudinaryContext>
      {/*</section>*/}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
