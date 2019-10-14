import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeIn as animationFrame } from "react-animations"
import Layout from "../components/layout"
import { GalleryPicture } from "../components/picture"

const animation = keyframes`${animationFrame}`

function Gallery() {
  const { allCloudinaryAsset } = useStaticQuery(graphql`
      query {
          allCloudinaryAsset {
              nodes {
                  secure_url
                  id
                  public_id
                  context {
                      custom {
                          style
                          content
                      }
                  }
              }
          }
      }
  `)

  return (
    <Layout>

      {/*<div className="container is-fluid">*/}
      <section className="section">

        <div className="container">
          {/*<h2 className="title has-text-centered">Gallery</h2>*/}

          <AnimatedDiv className="columns is-multiline is-mobile">
            {allCloudinaryAsset.nodes.map(({ context, secure_url, id, public_id }) =>
              <GalleryPicture key={id} secure_url={secure_url} context={context} public_id={public_id}/>,
            )}
          </AnimatedDiv>

        </div>
      </section>
    </Layout>
  )
}

export default Gallery

export const AnimatedDiv = styled("div")`
   animation: 1s ${animation};
`
