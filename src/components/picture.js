import React from "react"
import styled from "styled-components"
import { Box } from "grommet"
// import {Image} from 'grommet'
// import Image from 'gatsby-image'

function Picture({ url }) {
  return (
    <Box as='picture' border={{
      "color": "border",
      "size": "small",
      "style": "solid",
      "side": "all"
    }} elevation="medium" animation="fadeIn"
    >
      {/*<Box height="small" width="small">*/}
      <Img src={url}/>
    </Box>
  )
}

export default Picture

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
   
`

