require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {

  siteMetadata: {
    title: `Style 42`,
    description: `Gallery of AI artistic creations`,
    author: `phisuite`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `style42`,
        short_name: `style42`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pug-icon-big.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary-tag',
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
        // This folder will be created if it doesn’t exist.
        uploadFolder: 'gatsby-cloudinary',
        // uploadFolder: 'style42',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}


