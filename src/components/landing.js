import React from "react"
import { navigate } from "gatsby"
import Layout from "./layout"
import {AnimatedDiv} from "./gallery"

const IndexPage = (data) => {
  if (!data.pageContext) return <div>loading...</div>
  return (
   <Layout >
     <section className="section">
       <div className="container has-text-centered">
         <div className="columns is-vcentered">
           <AnimatedDiv className="column is-6"><a href="#">
             <img
               src={"https://res.cloudinary.com/style42/image/upload/v1569855909/result/16%2B3%2B10%2Bcontent1E4Style1E-2.png.png"}/>
              </a></AnimatedDiv>
           <div className="column is-6">
             <h2 className="title is-spaced">Style 42</h2>
             <p className="block">
               A gallery of artificial intelligence paintings
             </p>
             <div className="buttons is-centered"><a className="button is-primary" onClick={(e) => {
               e.preventDefault()
               navigate('/gallery')
             }}>Go!</a></div>
           </div>
         </div>
       </div>
     </section>
   </Layout>
  )
}
export default IndexPage