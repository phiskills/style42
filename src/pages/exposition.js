import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import { fadeIn as animationFrame } from "react-animations"
import { PictureGroup } from "../components/exposition"
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

  const { style, content, secure_url } = data.location.state || { style: "", content: "", secure_url: "" }

  return (
    <Layout>
      {makeGroups(allCloudinaryAsset.nodes, "content", content, secure_url)
        .map((group, index) => <PictureGroup key={index} group={group}/>)}
    </Layout>
  )
}


export const AnimatedDiv = styled("div")`
   animation: 1s ${animation};
`


function makeGroups(arr, type, value, url) {
  return groups(dict(arr, type), type, value, url)
}

function getType(type) {
  return o => o.context.custom[type]
}

function dict(arr, type = "content") {
  return arr.reduce((acc, cur) => {
    const t = getType(type)(cur)
    const new_t = acc[t] ? [...acc[t], cur] : [cur]
    return { ...acc, [t]: new_t }
  }, {})
}


function groups(data, type, value, url) {
  const get = getType(type)

  const groups = Object.entries(data).map(([, arr]) => arr)
  if (!url) return groups
  const firstGroup = groups.find(g => g[0] && get(g[0]) === value)
  const rest = groups.filter(g => g[0] && get(g[0]) !== value)
  return [
    [
      firstGroup.find(p => p.secure_url === url),
      ...firstGroup.filter(p => p.secure_url !== url),
    ],
    ...rest,
  ]
}

export default Exposition
