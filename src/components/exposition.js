import React from "react"
import { ExpositionMainPicture, ExpositionSimilarPicture } from "./picture"
import Layout from "./layout"
// 1. set state using group first element as default unless url given
// 2. change state on click to set new main and new rest
export function PictureGroup({group}) {
  let [selected, setSelected] = React.useState(0)
  return (
    <section className="section">
      <div className="container fluid has-text-centered">
      {/*<h2 className="title">Great Companies that already use PiperNet</h2>*/}
      <ExpositionMainPicture img_src={group[selected].secure_url}/>
      <div className="columns is-mobile" style={{overflowX: "scroll !important", overflowY: "hidden", scrollBehavior: "smooth" }}>
        {group.map(({ id, secure_url }, index) => <ExpositionSimilarPicture selected={selected === index} handleClick={e => setSelected(index)} key={id} img_src={secure_url}/>)}
      </div>
      {/*<h4 className="title is-spaced is-4">Client: K-Hole</h4>*/}
      {/*<p className="subtitle">We are constantly looking for new partners to migrate onto the Piper Net. The*/}
      {/*  future*/}
      {/*  of the internet is here - venture towards it with Pied Piper!</p>*/}
    </div>
    </section>
  )
}
