import React from 'react'

const DetallesPeliculaAdmin = () => {
  return (
    <>
          <header className='header'>
            <figure className='header__figure'>
            <img className='header__img' src={logoCineco} alt="logo" />
            </figure>

            <nav className='header__nav'>
            <button className='header__nav__button'>Acción</button>
            <button className='header__nav__button'>Terror</button>
            <button className='header__nav__button'>Ciencia ficción</button>
            <button className='header__nav__button'>Comedia</button>
            </nav>

            <div className='div__perfil'>
                <img src="https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1" alt="administrador" />
                <div className='div__perfil-dos'>
                    <h2 className='perfil__titulo'>Profile name</h2>
                    <span className='perfil__nombre'>View profile</span>
                </div>
                
            </div>

            <span class="material-symbols-outlined">
                settings
            </span>    
           
        </header>
    </>
  )
}

export default DetallesPeliculaAdmin