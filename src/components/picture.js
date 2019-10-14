import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"
import { navigate } from "gatsby-link"
import setUrl from "../utils/setUrl"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TumblrShareButton,
  EmailShareButton,
} from "react-share"

const Div = styled("div")`
  overflow: hidden;
  position: ${props => props.relative ? "relative" : "default"};
  z-index: 3;
  a {
    margin-left: 20px;
    margin-right: 20px;
  }
  .margin-vertical {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .icon {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  
  .column div {
    &:focus {
     outline: none;
    } 
  }
  
  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }
  
  .gallery-picture{
    cursor: pointer;
    &:hover {
      transform: scale(1.02); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      opacity: 0.4;
      filter: alpha(opacity=40); /* For IE8 and earlier */
    }
  }
  
  .exposition-picture__secondary {
     cursor: pointer;
     opacity: ${props => props.selected ? 0.5 : 1};
     &:hover {
       transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
       opacity: 0.4;
       filter: alpha(opacity=40); /* For IE8 and earlier */
    } 
  }
`

export function ExpositionMainPicture({ img_src }) {
  return (
    <Div className="is-relative block">
      <div className={"container"}>
        <img src={setUrl(img_src, {})} alt=""/>
        <div className="columns is-centered is-mobile is-variable is-4">
          <div className={`column is-narrow`}>
            <FacebookShareButton url={img_src}>
              <span className="icon is-medium is-hidden-touch">
                <FaFacebook size="auto"/>
              </span>
            </FacebookShareButton>
          </div>
          <div className={`column is-narrow`}>
            <TwitterShareButton url={img_src}>
              <span className="icon is-medium is-hidden-touch">
                <FaInstagram size="auto"/>
              </span>
            </TwitterShareButton>
          </div>
          <div className={`column is-narrow`}>
            <PinterestShareButton url={img_src} media={img_src}>
              <span className="icon is-medium is-hidden-touch">
                <FaPinterest size="auto"/>
              </span>
            </PinterestShareButton>
          </div>
        </div>
      </div>
    </Div>
  )
}

export function ExpositionSimilarPicture({ selected, img_src, className, public_id, handleClick }) {
  return (
    <Div selected={selected} onClick={handleClick} className={`column is-3 ${className}`}>
      <img className="exposition-picture__secondary" src={setUrl(img_src, {})} alt=""/>
    </Div>
  )
}

export function GalleryPicture({ secure_url, public_id, context }) {
  console.log("secure_url and context in gal pic", secure_url, context)
  return (
    <Div onClick={(e) => {
      navigate(`exposition`, { state: { ...context.custom, secure_url } })
    }} className="column is-4 is-narrow">
      <img className="gallery-picture" src={setUrl(secure_url, {})}/>
    </Div>
  )
}
