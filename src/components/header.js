import React from "react"
import { navigate } from "gatsby"

const Header = () => (
  <nav className="navbar is-fixed-top is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a onClick={(e) => {
          e.preventDefault()
          navigate("/")
        }} className="navbar-item"
           href="#">
          <h3 className={"title"}>
            Style 42
          </h3>
          {/*<img src={Image}/>*/}
        </a>

        {/*<a class="navbar-burger has-dropdown" role="button" aria-label="menu" aria-expanded="false">*/}
        {/*  /!*<div className="navbar-dropdown is-boxed">*!/*/}
        {/*  <span aria-hidden="true">*/}
        {/*  </span>*/}
        {/*  <span aria-hidden="true"></span>*/}
        {/*  <span aria-hidden="true"></span>*/}
        {/*  /!*</div>*!/*/}
        {/*</a>*/}
      </div>
      <div className="navbar-menu">
        {/*<div className="navbar-start">*//*</div>*/}

        <div className="navbar-end">

          <a onClick={e => {
            e.preventDefault()
            navigate("/gallery")
          }
          } className="navbar-item" href="#">Gallery</a>
          <a className={"navbar-item"}><span className="icon"> <i className="fab fa-instagram"></i> </span></a>
          <a className={"navbar-item"}><span className="icon"> <i className="fab fa-facebook"></i> </span></a>
          <a className={"navbar-item"}><span className="icon"> <i className="fab fa-pinterest"></i> </span></a>
          <a className={"navbar-item"}><span className="icon"> <i className="fab fa-twitter"></i> </span></a>
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

