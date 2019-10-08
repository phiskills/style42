const cloudinary = require("cloudinary").v2

const setList = list => list.reduce((acc, cur) => {
  acc.push({ url: cur.url, id: cur.public_id, tags: cur.tags })
  return acc
}, [])

exports.fetchPictures = async ({cloudName: cloud_name, apiKey: api_key, apiSecret: api_secret }) => {
  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
  })

  const { resources } = await cloudinary.api.resources_by_tag(
    //todo: use plugin options to chose the tags
    "test",
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
