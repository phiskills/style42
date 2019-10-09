const cloudinary = require("cloudinary").v2

const setList = list => list.reduce((acc, cur) => {
  acc.push(cur)
  return acc
}, [])

exports.fetchPictures = async ({ cloud_name, api_key, api_secret, tag }) => {
  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  })

  const { resources } = await cloudinary.api.resources_by_tag(
    tag,
    {
      max_results: 100,
      tags: true,
      // responsive_breakpoints: true,
      derived_context: true,
    },
    function(error, result) {
      error && console.log("error:", error)
    })

  return setList(resources)
}
