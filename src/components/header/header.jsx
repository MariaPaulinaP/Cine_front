import React, { useEffect, useState } from 'react'
import './header.scss'
import { traerFunciones, traerTeatros } from '../../service/traerBack/traerBack.js'
import { useNavigate } from 'react-router-dom'

const Header = () => {
 
  const [teatro, setTeatro] = useState([])
  const [funcion, setfuncion] = useState([])
  const [value, setvalue] = useState({})
  const [valueFecha, setValueFecha] = useState({})

  useEffect(()=>{
    traerDataTeatro()
    traerDataFuncion()
  }, [])

  const traerDataTeatro = async () =>{
    const dataBack = await traerTeatros()
    setTeatro(dataBack)
    return dataBack
  }

  const traerDataFuncion = async () =>{
    const funciones = await traerFunciones()
    for (const element of funciones) {
      const fechas = element.programacion.date;
      setfuncion(fechas)
      return fechas
    }
  }


  const teatroClick = (event) => {
    const {value} = event.target
    setvalue(value)
    localStorage.setItem("teatro", value)
  }
  
  const fechaClick = (event) => {
    const {value} = event.target
    setValueFecha(value)
    localStorage.setItem("fecha", value)
  }

  const dataUbicacion = teatro.find((item) => item.name === value)  

  const navigate = useNavigate()
  const handleAdmi = () => {
    navigate("/loginAdministrador")
  }

  return (
    
    <header className='header'>
    <figure className='header__figure'>
      <img className='header__img' src="https://seeklogo.com/images/C/cine-colombia-logo-1C443A07F5-seeklogo.com.png" alt="logo" />
    </figure>

    <nav className='header__nav'>
      <button className='header__nav__button'>Acción</button>
      <button className='header__nav__button'>Terror</button>
      <button className='header__nav__button'>Ciencia ficción</button>
      <button className='header__nav__button'>Comedia</button>
    </nav>

    <formulario className='header__form' >
      <div className='header__form__select'>
        <label htmlFor="ubicacion" className='label'>Cines cercanos</label>
        <select onChange={teatroClick} value={value} name='Seleccione la sala de cine' id='ubiacion' className='select'>
        <option className='valores'>Seleccione el teatro</option>
        {
          teatro.map((teatro, index) => (
            <option  key={index} className='valores'>{teatro.name}</option>
          ))
        }
          
        </select>
      </div>

      <div className='header__form__select'>
        <label htmlFor="fecha" className='label'>Fecha</label>
        <select onChange={fechaClick} value={valueFecha} id='fecha'className='select' >
        <option className='valores'>Seleccione la fecha</option>
        {
          dataUbicacion? (
            funcion.map((fecha, index) => (
              <option  key={index} className='valores'>{fecha.dia}
              {console.log(fecha.dia)}
              </option>
              
            ))  
          ):(
            console.log("Seleccione ubicación y fecha")
          )
        }
        
        </select>
      </div>
    </formulario>

    <button className='header__icono'><span class="material-symbols-outlined" onClick={handleAdmi}>
      person
      </span></button>

    </header>
    
  )
}

export default Header