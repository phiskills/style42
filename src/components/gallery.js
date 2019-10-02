import React, { useEffect, useState } from "react"
import { Box, Grid, ResponsiveContext } from "grommet"
import Picture from "./picture"
import Layout from "./layout"
import Header from "./header"

const ResponsiveGrid = ({ children, ...props }) => {
  const size = React.useContext(ResponsiveContext)
  if (size === "small") {
    return (
      <Box margin="medium">
        <Grid as="grid" columns="small" rows="medium" gap="medium"  {...props}>
          {children}
        </Grid>
      </Box>
    )
  }
  return (

    <Box margin="small">
      <Grid as="grid" columns="medium" rows="medium" gap="small"  {...props}>
        {children}
      </Grid>
    </Box>
  )
}

function Gallery(data) {
  if (!data.pageContext) return <div>loading...</div>
  const {
    pictures,
    headerIcon,
  } = data.pageContext
  return (
    <Layout>

      <Header headerIcon={headerIcon}/>


      <ResponsiveGrid>
        {pictures.map(p => <Picture key={p} url={p}/>)}
      </ResponsiveGrid>
    </Layout>
  )
}

export default Gallery


