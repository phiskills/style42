const cloudinary = require("cloudinary").v2
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

const setList = list => list.reduce((acc, cur) => {
  acc.push(cur.url)
  return acc
}, [])

const fetchPictures = async () => {

  cloudinary.config({
    cloud_name: process.env.GATSBY_CLOUDINARY_NAME,
    api_key: process.env.GATSBY_CLOUDINARY_API_KEY,
    api_secret: process.env.GATSBY_CLOUDINARY_API_SECRET,
  })

  const res = await cloudinary.api.resources_by_tag(
    'batchResult1',
    {
      max_results: 100,

    },
    function(error, result) {
      error && console.log("error:", error)
    })
  return setList(res.resources)
}


exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pictures = await fetchPictures()

  const result = await graphql(`
          query {
              headerIcon: file(relativePath: { eq: "pug-icon-big.png" }) {
                  childImageSharp {
                      fluid(maxWidth: 32) {
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
  `)

  console.log("result", result.data.headerIcon)
  createPage({
    path: `/`,
    component: require.resolve("./src/components/gallery.js"),
    context: { pictures, headerIcon: result.data.headerIcon },
    // // Create a page for each Pokémon.
    // allPokemon.forEach(pokemon => {
    //   createPage({
    //     path: `/pokemon/${pokemon.name}/`,
    //     component: require.resolve("./src/templates/pokemon.js"),
    //     context: { pokemon },
    //   })
    // })
  })
}