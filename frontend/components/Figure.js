import React from "react"

export default 
function Figure({imageUrl,caption}){
    return (
      <figure>
        <img src= {imageUrl} />
        <figcaption>photo taken on {caption}</figcaption>
      </figure>
    )
  }