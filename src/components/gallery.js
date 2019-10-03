import React from "react"
import Picture from "./picture"
import Layout from "./layout"

function Gallery(data) {
  if (!data.pageContext) return <div>loading...</div>
  const {
    pictures,
    logo
  } = data.pageContext
  return (
    <Layout logo={logo}>
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">Gallery</h2>
          <div className="columns is-multiline">
            {pictures.map(p => <Picture key={p} public_id={p}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery


