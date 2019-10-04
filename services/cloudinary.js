
const cloudinary = require("cloudinary").v2
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const setList = list => list.reduce((acc, cur) => {
  acc.push(cur.secure_url)
  return acc
}, [])

async function fetchPictures() {
  cloudinary.config({
    cloud_name: process.env.GATSBY_CLOUDINARY_NAME,
    api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
    api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
  })

  const res = await cloudinary.api.resources_by_tag(
    "batchResult1",
    {
      max_results: 100,
    },
    function(error, result) {
      error && console.log("error:", error)
    })
  console.log(res.resources)
  return setList(res.resources)
}

module.exports = {
  fetchPictures
}