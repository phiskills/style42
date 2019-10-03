import React from "react"
import {Image, Transformation} from 'cloudinary-react'

function Picture({ public_id }) {
  return (
    <div className="column is-4">
      <Image publicId={public_id} alt="">
        <Transformation dpr="auto" quality="auto" width="250"/>
      </Image>
    </div>
  )
}

export default Picture

