const cloudinary = require("cloudinary").v2

const setList = list => list.reduce((acc, cur) => {
  acc.push(cur.url)
  return acc
}, [])

const fetchPictures = async () => {

  cloudinary.config({
    cloud_name: "style42",
    api_key: "934791563814154",
    api_secret: "NDbVxmsY-5jZhPzGvGlR1aC-KDQ",
  })
  const res = await cloudinary.api.resources(
    function(error, result) {
      error && console.log('error:', error)
    })
  return setList(res.resources)
}


exports.createPages = async ({ actions: { createPage } }) => {
  const pictures = await fetchPictures()
  console.log(pictures)
  createPage({
    path: `/`,
    component: require.resolve("./src/components/gallery.js"),
    context: { pictures },
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