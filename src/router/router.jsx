import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/home/home'
import DetallePelicula from '../components/detallePelicula/detallePelicula'
import Card from '../components/card/card'
import SeleccionBoletos from '../components/seleccionBoletos/seleccionBoletos'
import SeleccionAsientos from '../components/seleccionAsientos/seleccionAsientos'
import PagoBoletos from '../components/pagoBoletos/pagoBoletos'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Card />}/>
              <Route path=":pelicula" element={<DetallePelicula />}/>
              <Route path=":seleccionBoleto" element={<SeleccionBoletos />}/>
              <Route path="/seleccionBoleto" element={<SeleccionBoletos />} />
              <Route path="/seleccionAsiento" element={<SeleccionAsientos/>} />
              <Route path="/compraBoletos" element={<PagoBoletos/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
} 


export default Router