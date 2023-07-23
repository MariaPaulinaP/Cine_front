import React from 'react'
import './header.scss'

const Header = () => {
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
        <select id='ubiacion' className='select'>
          <option value="">Seleccione la sala de cine</option>
        </select>
      </div>

      <div className='header__form__select'>
        <label htmlFor="fecha" className='label'>Fecha</label>
        <select id='fecha'className='select' >
          <option value="">Seleccione la fecha</option>
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