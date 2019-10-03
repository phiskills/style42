const cloudinary = require("cloudinary").v2

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const setList = list => list.reduce((acc, cur) => {
  acc.push(cur.url)
  return acc
}, [])

const formatUrl = (url) => {
  let urlArr = url.split('/')
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


exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pictures = await fetchPictures()

  return graphql(`
          query {
              logo: file(relativePath: { eq: "logo.png" }) {
                  childImageSharp {
                      fluid(maxWidth: 200) {
                          base64
                          tracedSVG
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                          originalImg
                          originalName
                      }
                  }
              }
          }
  `, { limit: 120 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    createPage({
      path: `/`,
      component: require.resolve("./src/components/landing.js"),
      context: { pictures, logo: result.data.logo},
      // // Create a page for each Picture.
      // pictures.forEach(picture => {
      //   createPage({
      //     path: `/picture/${picture}/`,
      //     component: require.resolve("./src/templates/picture.js"),
      //     context: { picture },
      //   })
      // })
    })
    createPage({
      path: `/gallery`,
      component: require.resolve("./src/components/gallery.js"),
      context: { pictures, logo: result.data.logo},
    })
  })
}