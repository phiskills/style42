import React from "react"
import styled, { keyframes } from 'styled-components';
import { fadeIn as animationFrame } from 'react-animations';

import Layout from "./layout"
import GalleryItem from "./galleryItem"
const animation = keyframes`${animationFrame}`;

function Gallery(data) {
  if (!data.pageContext) return <div>loading...</div>
  const {
    pictures,
    logo
  } = data.pageContext
  return (
    <Layout logo={logo}>
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">Gallery</h2>
          <AnimatedDiv className="columns is-multiline">
            {pictures.map(img_src => <GalleryItem key={img_src} img_src={img_src}/>)}
          </AnimatedDiv>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery

export const AnimatedDiv = styled('div')`
   animation: 1s ${animation};
`
