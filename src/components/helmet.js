import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactHelmet from 'react-helmet'

const Helmet = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ReactHelmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <html lang="en"/>
        {/*<html lang="en" className="has-navbar-fixed-top"/>*/}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Raleway"
          rel="stylesheet"
        />
        {/*<link rel="stylesheet" href="https://unpkg.com/bulmaswatch/darkly/bulmaswatch.min.css"/>*/}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"/>

      </ReactHelmet>
    )}
  />
)

export default Helmet