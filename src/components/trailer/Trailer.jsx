import React, { useEffect, useState } from 'react'
import infoVideos from '../../service/traerVideos/TraerVideos'
import axios from 'axios'
import ReactPlayer from 'react-player'




const Trailer = () => {

const [media, setmedia] = useState([])

useEffect(() => {
    multimedia()
}, [])

const idPelicula = "575264"

const multimedia = async() => {
    const data = await infoVideos(idPelicula)
    const key = data.videos.results[0].key
    setmedia(key)
    console.log(data.videos.results[1].key);
}

  return (
    <ReactPlayer
        url={`https://www.youtube.com/watch?v=${media}`}
        width="100%"
        height="350px"
        controls
        playing
    />
  
  )
}

export default Trailer