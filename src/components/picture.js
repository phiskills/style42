import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaPinterest, FaWhatsapp, FaHeart, FaCartPlus } from "react-icons/fa"
import { navigate } from "gatsby"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TumblrShareButton,
  EmailShareButton,
} from "react-share"

import setUrl from "../utils/setUrl"


export function ExpositionMainPicture({ img_src }) {
  return (
    <Div className="box">
      <div className={"container fluid"}>
        <div>
          <img className="is-rounded-1" src={setUrl(img_src, {})} alt=""/>
        </div>
        <div className="has-margin-top-2 level is-mobile">
          <div className="level-left">
            <div className={`level-item is-narrow`}>
              <FacebookShareButton url={img_src}>
              <span className="icon ">
                <FaFacebook/>
              </span>
              </FacebookShareButton>
            </div>
            <div className={`level-item is-narrow`}>
              <TwitterShareButton url={img_src}>
              <span className="icon">
                <FaInstagram/>
              </span>
              </TwitterShareButton>
            </div>
            <div className={`level-item is-narrow`}>
              <WhatsappShareButton url={img_src}>
              <span className="icon">
                <FaWhatsapp/>
              </span>
              </WhatsappShareButton>
            </div>
            <div className={`level-item is-narrow`}>
              <PinterestShareButton url={img_src} media={img_src}>
              <span className="icon">
                <FaPinterest/>
              </span>
              </PinterestShareButton>
            </div>
          </div>
          <div className="level-right">
            <div onClick={() => alert("item added to favourites!")} className="level-item">
             <span className={`icon`}>
               <FaHeart/>
             </span>
            </div>
            <div onClick={() => alert("Item added to cart")} className="level-item">
             <span className={`icon`}>
               <FaCartPlus/>
             </span>
            </div>
          </div>
        </div>

      </div>
    </Div>
  )
}

export function ExpositionSimilarPicture({ selected, img_src, handleClick }) {
  return (
    <Div selected={selected} onClick={handleClick} className={`column is-3 has-margin-top-3`}>
      <img className="is-desktop-hovered-large" src={setUrl(img_src, {})} alt=""/>
    </Div>
  )
}

export function GalleryPicture({ secure_url, public_id, context }) {
  return (
    <Div onClick={(e) => {
      navigate(`exposition`, { state: { ...context.custom, secure_url } })
    }} className="column is-4 is-narrow">
      <img className="is-rounded-1 is-desktop-hovered" src={setUrl(secure_url, {})}/>
    </Div>
  )
}

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
    opacity: ${props => props.selected ? "0.7" : 1
}
  
`
