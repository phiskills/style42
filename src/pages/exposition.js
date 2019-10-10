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


  const contentDict = dict(allCloudinaryAsset.nodes, 'content')
  // const styleDict = dict(allCloudinaryAsset.nodes, 'style')
  const pictureGroups = groups(contentDict, 'content', content, img_src)
  // const displayPictures = allCloudinaryAsset.nodes.filter(picture => picture.

  return (
    <Layout>
      {pictureGroups.map(([main, ...similar]) => {
        console.log('main', main)
        console.log("similar", similar)
        return (
          <section className="section">
            <div className="container has-text-centered">
              <h2 className="title">Great Companies that already use PiperNet</h2>
              <ExpositionMainPicture img_src={main.secure_url} />
              <div className="columns is-mobile">
                {similar.map(p => <ExpositionSimilarPicture key={p.id} img_src={p.secure_url}/>)}
              </div>
              <h4 className="title is-spaced is-4">Client: K-Hole</h4>
              <p className="subtitle">We are constantly looking for new partners to migrate onto the Piper Net. The future
                of the internet is here - venture towards it with Pied Piper!</p>
            </div>
          </section>
        )
      })}
    </Layout>
  )
}



export const AnimatedDiv = styled("div")`
   animation: 1s ${animation};
`

/**
 * Returns dictionary using context.custom.type key in array
 * @param arr
 * @param type
 * @returns {*}
 */
function dict(arr, type='content') {
  console.log('array', arr)
  const dict = arr.reduce((acc, cur) => {
    if (acc[cur.context.custom[type]]) {
      acc[cur.context.custom[type]].push(cur)
    }
    else {
      acc[cur.context.custom[type]] = [cur]
    }
    return acc
  }, {})
  return dict
}

function groups(dict, type, content, url) {
  const groups = []
  for (let [key,arr] of Object.entries(dict)) {
    groups.push(arr)
  }

  const firstGroup = groups.filter(g => g[0] && g[0].context.custom[type] === content)[0].sort(p => p.secure_url === url)
  groups.unshift(firstGroup)
  return groups
}

export default Exposition
