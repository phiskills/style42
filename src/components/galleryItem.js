import React from "react"
import styled, { keyframes } from 'styled-components';
// import { zoomIn as animationFrame } from 'react-animations';
import setUrl from "../utils/setUrl"

// const animation = keyframes`${animationFrame}`;


function GalleryItem({ img_src }) {
  return (
    <Div className="column is-4">
      <Img src={setUrl(img_src)} />
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

