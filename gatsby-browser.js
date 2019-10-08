/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const cloudinary = require('cloudinary').v2

require('dotenv').config({
  path: `env.${process.env.NODE_ENV}`,
});

const current_batch = 'batchResult1'

console.log(process.env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

cloudinary.search
  .expression(`resource_type:image AND tags=${current_batch}`)
  .with_field('tags')
  .max_results(5)
  .execute().then((result, error)=>console.log(result))