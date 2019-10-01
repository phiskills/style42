import React, { useEffect, useState } from "react"
import {Box, Grid} from 'grommet'
import cloudinary from 'cloudinary-core';
import Picture from "./picture"

// 1. set up empty state
// 2. call external cloudinary api to find images with tag='batchResult1'
// 3. return list of elements
function Gallery(props) {

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const cl = new cloudinary.Cloudinary({cloud_name: "style42", api_key:'934498994849366', api_secret:'7fsFdxrIzYlMdA7fuIHqXS1-WeI' });
    const url = cl.url('batchResult1', {format: 'json', type: 'list'});
    console.log("url", JSON.parse(url))

  })

  return (
    <Grid>
      {pictures.map(p => <Picture/>)}
    </Grid>
  )
}

export default Gallery