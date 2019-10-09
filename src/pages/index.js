import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import { AnimatedDiv } from "./gallery"

const IndexPage = (data) => {
  console.log(data)
  const { cloudinaryAsset } = useStaticQuery(graphql`
      query {
          cloudinaryAsset(tags: {regex: "/landingHero/"}) {
              tags
              url
              secure_url
              id
          }
      }
  `)

  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <AnimatedDiv className="column is-6"><a href="#">
              <img
                src={cloudinaryAsset.secure_url} />

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


