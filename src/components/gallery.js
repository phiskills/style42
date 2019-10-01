import React, { useEffect, useState } from "react"
import {Box, Grid} from 'grommet'
import cloudinary from 'cloudinary-core';
import Picture from "./picture"

// 1. set up empty state
// have a lambda function update a json file with pictures every hour or so
// use pictures list inside this component to render
// move cloudinary code to lambda function
function Gallery(props) {

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const cl = new cloudinary.Cloudinary({cloud_name: "style42", api_key:'934498994849366', api_secret:'7fsFdxrIzYlMdA7fuIHqXS1-WeI', secure:true });
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