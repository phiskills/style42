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
            {pictures.map(img_src => <Picture key={img_src} img_src={img_src}/>)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery


