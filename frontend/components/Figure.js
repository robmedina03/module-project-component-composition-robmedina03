import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
max-width: 500px;

figcaption{
  font-style: italic
}

`

export default 
function Figure({imageUrl,caption}){
    return (
      <StyledFigure>
        <img src= {imageUrl} />
        <figcaption>photo taken on {caption}</figcaption>
      </StyledFigure>
    )
  }