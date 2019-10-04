import React from "react"
import setUrl from "../utils/setUrl"

function Picture({ img_src }) {

  return (
    <div className="column is-4">
      <img src={setUrl(img_src)} />
    </div>
  )
}

export default Picture

