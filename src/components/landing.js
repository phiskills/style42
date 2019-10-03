import React from "react"
import { navigate } from "gatsby"
import Layout from "./layout"

const IndexPage = (data) => {
  if (!data.pageContext) return <div>loading...</div>
  const {
    logo,
  } = data.pageContext
  return (
   <Layout logo={logo}>
     <section className="section">
       <div className="container has-text-centered">
         <div className="columns is-vcentered">
           <div className="column is-6"><a href="#">
             <img
               src={"https://res.cloudinary.com/style42/image/upload/v1569855909/result/16%2B3%2B10%2Bcontent1E4Style1E-2.png.png"}/>
              </a></div>
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