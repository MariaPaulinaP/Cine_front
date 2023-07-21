import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../components/home/home'
import DetallesPeliculas from '../components/card/DetallesPeliculas'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/DetallesPeliculas' element={<DetallesPeliculas/>} />
            <Route path='/' element='<Home/>' />
        </Routes>
    </BrowserRouter>
  )
}

export default Router