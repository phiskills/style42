import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby-link"
import setUrl from "../utils/setUrl"


const Div = styled("div")`
  cursor: pointer;
  overflow: hidden;
  position: ${props => props.relative ? "relative" : "default"};
`

const Img = styled("img")`
  object-fit: contain;
  height: 100%;
  width: 100%;
  transition: 0.3s;
`

const StyledImg = styled(Img)`
  transition: 0.4s;
  &:hover {
    transform: scale(1.02); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    opacity: 0.5;
    transition: smooth;
}
`

const EffectImage = styled(Img)`
   opacity: ${props => props.selected ? 0.5 : 1};
`


const Overlay = styled("div")`
  position: absolute;
  //opacity: 0.9;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 0;
  z-index: 1;
  
`

export function ExpositionMainPicture({ img_src }) {
  return (
    <Div relative={true} className="block">
      <Overlay>
        <a><span className="icon"> <i className="fab fa-instagram"></i> </span></a>
        <a><span className="icon"> <i className="fab fa-instagram"></i> </span></a>
        <a><span className="icon"> <i className="fab fa-instagram"></i> </span></a>
      </Overlay>
      <Img src={setUrl(img_src, {})} alt=""/>
    </Div>
  )
}

export function ExpositionSimilarPicture({ selected, img_src, className, public_id, handleClick }) {
  return (
    <Div onClick={handleClick} className={`column is-3 ${className}`}>
      <EffectImage selected={selected} src={setUrl(img_src, {})} alt=""/>
    </Div>
  )
}

export function GalleryPicture({ secure_url, public_id, context }) {
  return (
    <Div relative={true} onClick={(e) => {
      navigate(`exposition`, { state: { ...context.custom, secure_url} })
    }} className="column is-4">
      <StyledImg src={setUrl(secure_url, {})}/>
    </Div>
  )
}
