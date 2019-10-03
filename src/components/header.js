import React from "react"
import Img from "gatsby-image"
import { FaTwitter, FaInstagram, FaFileUpload } from "react-icons/fa"
import * as Image from "../images/logo.png"

const Header = ({ logo }) => (

  <nav className="navbar is-transparent " style={{}}>
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item"
           href="#">
          <h3 className={"title"}>
            Style 42
          </h3>
          {/*<img src={Image}/>*/}
        </a>
        <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false"><span
          aria-hidden="true"></span><span
          aria-hidden="true"></span><span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start"><a className="navbar-item" href="#">Gallery</a>
          <a className="navbar-item" href="#">Social
          </a>
        </div>
        <div className="navbar-end">

          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href="#">Follow us </a><a
              className="button is-primary" href="#">Upload</a></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header

