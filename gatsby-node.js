const {fetchPictures} = require("./services/cloudinary")

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

    // createPage({
    //   path: `/`,
    //   component: require.resolve("./src/components/index.js"),
    //   context: { pictures, logo: result.data.logo },
    //   // // Create a page for each Picture.
    //
    // })
    createPage({
      path: `/gallery`,
      component: require.resolve("./src/components/gallery.js"),
      context: { pictures, logo: result.data.logo },
    })

    pictures.forEach(picture => {
      createPage({
        path: `/gallery/${picture.id}/`,
        component: require.resolve("./src/components/tableau.js"),
        context: { picture },
      })
    })
  })
}