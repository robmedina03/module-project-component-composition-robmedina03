import React from "react"
import Figure from "./Figure"
import styled from "styled-components"

const StyledCard = styled.div`
border: 1px solid black;
border-radius: 12px;
padding:2rem;

h2{
  font-size:2.5em;
  margin  0 0 1rem 0;
}

p{
  font-style: arial;
  margin  0 0 1.5rem 0;
}
`


export default function Card({title, text,imageUrl, date }){
    return (
      <StyledCard className='card'>
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>
      <Figure  imageUrl= {imageUrl}
      caption = {date} />
      
  
    </StyledCard>
  
    )
  }
   