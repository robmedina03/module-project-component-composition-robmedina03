import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'






function App() {
  const [apod, setApod]= useState()

  useEffect(() =>{
    function callingphotos (){
      axios.get(url)
      .then(res =>{
        console.log(res.data)
        setApod(res.data)
      })

      .catch(err => {
        console.log(err.message)
      })
    }
   // callingphotos()
   setApod({
    "date": "2024-02-04",
    "explanation": "Stars are forming in the gigantic dust pillar called the Cone Nebula. Cones, pillars, and majestic flowing shapes abound in stellar nurseries where natal clouds of gas and dust are buffeted by energetic winds from newborn stars. The Cone Nebula, a well-known example, lies within the bright galactic star-forming region NGC 2264. The Cone was captured in unprecedented detail in this close-up composite of several observations from the Earth-orbiting Hubble Space Telescope. While the Cone Nebula, ab...",
    "hdurl": "https://apod.nasa.gov/apod/image/2402/cone_hubbleschmidt_4048.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Cone Nebula from Hubble",
    "url": "https://apod.nasa.gov/apod/image/2402/cone_hubbleschmidt_960.jpg"})

  }
  
  ,[])
  if(!apod){return "fetching data of the day "}
  return (
    
    <section >
     <Card
     title = {apod.title}
     text = {apod.explanation}
     imageUrl={apod.url}
     date = {apod.date}
      />
    </section>
  )
}

export default App
