import React, { useEffect, useState } from "react"
import { Box, Grid } from "grommet"
import Picture from "./picture"
import Layout from "./layout"

// 1. set up empty state
// have a lambda function update a json file with pictures every hour or so
// use pictures list inside this component to render
// move cloudinary code to lambda function
function Gallery({pageContext: {pictures}}) {
  return (
    <Layout>
      <Grid>
        {pictures.map(p => <Picture key={p} url={p}/>)}
      </Grid>
    </Layout>
  )
}

export default Gallery