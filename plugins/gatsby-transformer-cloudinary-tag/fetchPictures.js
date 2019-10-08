const cloudinary = require("cloudinary").v2

const setList = list => list.reduce((acc, cur) => {
  acc.push({url: cur.url, id: cur.public_id, tags: cur.tags})
  return acc
}, [])

exports.fetchPictures = async options => {
  // todo: use options
  // console.log("processcloudinary name: ", process.env.GATSBY_CLOUDINARY_NAME)
  cloudinary.config({
    cloud_name: options.cloudName,
    api_key: options.apiKey,
    api_secret: options.apiSecret,
  })
  cloudinary.api.resources('gatsby-cloudinary/pug-icon-big',
    // { resource_type: 'raw'},
    function(error, result) {console.log(result, error); });

  const res = await cloudinary.api.resources_by_tag(
    "test",
    {
      max_results: 100,
      tags: true,
      // responsive_breakpoints: true,
      derived_context: true,
    },
    function(error, result) {
      error && console.log("error:", error)
      console.log(result)
    })

  return setList(res.resources)
}
