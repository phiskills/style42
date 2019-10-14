import React from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import { ExpositionMainPicture, ExpositionSimilarPicture } from "./picture"

export function PictureGroup({ group }) {
  let [selected, setSelected] = React.useState(0)
  return (
    <section className="section">
      <div className="container has-text-centered ">
        <ExpositionMainPicture img_src={group[selected].secure_url}/>
        <div className={"row is-mobile"}>
          <div onClick={() => {
            setSelected((selected - 1) % group.length)
          }} className={"is-centered is-desktop-hovered-large"}>
            <FaAngleLeft size={"1.5rem"}/>
          </div>
          <div className="columns is-mobile is-variable is-1"
               style={{ overflowX: "scroll !important", overflowY: "hidden", scrollBehavior: "smooth" }}>
            {group.map(({ id, secure_url }, index) => <ExpositionSimilarPicture selected={selected === index}
                                                                                handleClick={e => setSelected(index)}
                                                                                key={id} img_src={secure_url}/>)}
          </div>
          <div onClick={() => setSelected((selected + 1) % group.length)} className="is-centered is-desktop-hovered-large">
            <FaAngleRight size={"1.5rem"}/>
          </div>
        </div>
      </div>
    </section>
  )
}
