import React from "react"
import { Box, Image } from "grommet"
// import {Image} from 'grommet'
// import Image from 'gatsby-image'

function Picture({ url }) {
  return (
    <Box as='picture' border={{
      "color": "border",
      "size": "small",
      "style": "solid",
      "side": "all"
    }} elevation="medium" animation="zoomIn">
      {/*<Box height="small" width="small">*/}
      <Image style={{
          "cursor": "pointer"
        }} fit="cover" src={url}/>
    </Box>
  )
}

export default Picture

