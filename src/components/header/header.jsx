import React, { useEffect, useState } from 'react'
import './header.scss'
import { traerBack } from '../../service/traerBack/traerBack'

const Header = () => {
 
  const [Back, setBack] = useState([])
  const [value, setvalue] = useState(null)

  useEffect(()=>{
    traerDataBack()
  }, [])

  const traerDataBack = async () =>{
    const dataBack = await traerBack()
    setBack(dataBack)
    return dataBack
  }

  const teatroClick = (event) => {
    const {value} = event.target
    setvalue(value)
  }

  const dataUbicacion = Back.find(item => item.nombre === value)  

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
          Back.map((teatro, index) => (
            <option  key={index} className='valores'>{teatro.nombre}</option>
          ))
        }
          
        </select>
      </div>

      <div className='header__form__select'>
        <label htmlFor="fecha" className='label'>Fecha</label>
        <select id='fecha'className='select' >
        <option className='valores'>Seleccione la fech</option>
        {
          dataUbicacion? (
            Back.map((fecha, index))
          ):(
            console.log("no da")
          )
          
          
        }
        
        </select>
      </div>
    </formulario>

    <button className='header__icono'><span class="material-symbols-outlined">
      person
      </span></button>

    </header>
    
  )
}

export default Header