import React from 'react'
import styled from "styled-components"
import Layout from "./layout"
import setUrl from "../utils/setUrl"

function Tableau(data) {
  if (!data.pageContext) return <div>loading...</div>
  const {
    picture
  } = data.pageContext
  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <div className="block">
            <Img src={setUrl(picture.url, {width: 'w_800', quality: 'q_auto', proportion: 'ar_4:3'})} alt=""/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const Img = styled('img')`
  object-fit: contain;
`

export default Tableau