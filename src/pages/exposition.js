import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeIn as animationFrame } from "react-animations"
import { ExpositionMainPicture, ExpositionSimilarPicture } from "../components/picture"
import Layout from "../components/layout"

const animation = keyframes`${animationFrame}`

function Exposition(data) {
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

  const {style, content, img_src} = data.location.state || {style: '', content: '', img_src: ''}

  const similarContent = allCloudinaryAsset.nodes.filter(n => n.context.custom.content === content) // todo: also check for different id if mapping
  const similarStyle = allCloudinaryAsset.nodes.filter(n => n.context.custom.style === style) // todo: also check for different id if mapping


  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title">Great Companies that already use PiperNet</h2>
          <ExpositionMainPicture img_src={img_src} />
          <div className="columns is-mobile">
            {/*{similarContent.map(({secure_url}) => <ExpositionSimilarPicture url={secure_url} />)}*/}
          </div>
          <h4 className="title is-spaced is-4">Client: K-Hole</h4>
          <p className="subtitle">We are constantly looking for new partners to migrate onto the Piper Net. The future
            of the internet is here - venture towards it with Pied Piper!</p>
        </div>
      </section>
    </Layout>
  )
}

export default Exposition

export const AnimatedDiv = styled("div")`
   animation: 1s ${animation};
`
