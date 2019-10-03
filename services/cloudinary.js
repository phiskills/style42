const cloudinary = require("cloudinary").v2

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const CLOUDINARY_URL = `${process.env.GATSBY_CLOUDINARY_NAME/w_auto`
const setList = list => list.reduce((acc, cur) => {
  acc.push(cur.url)
  return acc
}, [])

const makeUrl = (fileName) => {
  let arr = fileName.split('.')
  return ''
  let urlNewArr = urlArr.insert()
  return
}

const fetchPictures = async () => {

  cloudinary.config({
    cloud_name: process.env.GATSBY_CLOUDINARY_NAME,
    api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
    api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
  })

  const res = await cloudinary.api.resources_by_tag(
    "batchResult1",
    {
      max_results: 500,


    },
    function(error, result) {
      error && console.log("error:", error)
    })
  return setList(res.resources)
}


export fetchPictures

