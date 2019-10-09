import React from "react"
import styled from 'styled-components'
import { navigate } from "gatsby-link"
import setUrl from "../utils/setUrl"


const Div = styled('div')`
  cursor: pointer;
  
`

const Img = styled('img')`
  object-fit: contain;
  height: 100%;
  width: 100%;
  
  transition: 0.5s;
  &:hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    opacity: 0.95;
    transition: smooth;
}
   
`

export function ExpositionMainPicture({img_src, public_id}) {
 return (
   <Div className="block"><a href="#"><Img src={setUrl(img_src, {})}
                                           alt=""/></a></Div>
 )
}

export function ExpositionSimilarPicture({img_src, public_id}) {
  return (
    <Div className="column is-3"><a href="#"><img
      src={setUrl(img_src, {})} alt=""/></a></Div>
  )
}


export function GalleryPicture({ img_src, public_id, context}) {
 return (
   <Div onClick={(e) => {
    navigate(`exposition`, {state:context})
   }} className="column is-4">
    <Img src={setUrl(img_src, {})} />
   </Div>
 )
}

