import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/home'
import DetallePelicula from '../components/detallePelicula/detallePelicula'
import Card from '../components/card/card'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Card />}/>
              <Route path=":pelicula" element={<DetallePelicula />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
} 


export default Router