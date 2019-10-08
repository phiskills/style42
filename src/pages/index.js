import React from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import { AnimatedDiv } from "../components/gallery"

const IndexPage = (data) => {
  console.log(data)
  // if (!data.pageContext) return <div>loading...</div>
  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <AnimatedDiv className="column is-6"><a href="#">
              <img
                src={"https://res.cloudinary.com/style42/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1570533486/art/10%2B1%2B10%2Bcontent1E4Style1E-2.png.png"}/>

            </a></AnimatedDiv>
            <div className="column is-6">
              <h2 className="title is-spaced">Style 42</h2>
              <p className="block">
                A gallery of artificial intelligence paintings
              </p>
              <div className="buttons is-centered"><a className="button is-primary" onClick={(e) => {
                e.preventDefault()
                navigate("/gallery")
              }}>Go!</a></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage


export const query = graphql`
    query IndexQuery {
        allCloudinaryAsset {
            nodes {
                tags
                id
               
            }
        }
    }
`