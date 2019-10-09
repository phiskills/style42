import React from "react"
import styled from 'styled-components'
import { navigate } from "gatsby-link"
import setUrl from "../utils/setUrl"



function GalleryItem({ img_src, id}) {
  console.log(id)
  return (
    <Div onClick={(e) => {
      navigate(`gallery/${id}`)
    }} className="column is-4">
      <Img src={setUrl(img_src, {})} />
    </Div>
  )
}

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
export default GalleryItem

