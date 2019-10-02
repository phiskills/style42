import React, { useEffect, useState } from "react"
import { Box, Grid } from "grommet"
import Picture from "./picture"
import Layout from "./layout"
import Header from "./header"

function Gallery(data) {
  if (!data.pageContext) return <div>loading...</div>
  const {
    pictures,
    headerIcon
  } = data.pageContext
  return (
    <Layout>
      <Header headerIcon={headerIcon}/>
      <Box margin="small">
        <Grid as="grid" columns="medium" rows="medium" gap="small">
          {pictures.map(p => <Picture key={p} url={p}/>)}
        </Grid>
      </Box>
    </Layout>
  )
}

export default Gallery

