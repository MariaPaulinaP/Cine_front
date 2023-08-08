import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router';
import { traerPeliculas } from '../../service/traerPeliculas/traerPeliculas';
import './HomeAdmin.scss'
import logoCineco from '../../assets/logo_cineco.svg'

const HomeAdmin = () => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const [data, setData] = useState([]);

    useEffect(() => {
        traerData();
    }, []);
    
    const traerData = async () => {
        const data = await traerPeliculas();
        setData(data);
    }

    // const navigate = useNavigate()
  return (
    <>
         <header className='headerA'>
            <figure className='header__figureA'>
            <img className='header__imgA' src={logoCineco} alt="logo" />
            </figure>

            <nav className='header__nav'>
            <button className='header__nav__buttonA'>Acción</button>
            <button className='header__nav__buttonA'>Terror</button>
            <button className='header__nav__buttonA'>Ciencia ficción</button>
            <button className='header__nav__buttonA'>Comedia</button>
            </nav>

            <div className='div__perfiA'>
                <img src="https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1" alt="administrador" />
                <div className='div__perfil-dosA'>
                    <h2 className='perfil__tituloA'>Profile name</h2>
                    <span className='perfil__nombreA'>View profile</span>
                </div>
                
            </div>

            
            <span class="material-symbols-outlined">
                settings
            </span>    
           

        </header> 

        {  <h1 className='carteleraA'>En cartelera</h1> }

            { <section className='container__mainA'>
                {
                    data.map((pelicula, index) => (
                        <div key={index} className='container__divA' onClick={() => {clickPelicula(pelicula) }}>
                            <img src={URL_IMAGE + pelicula.poster_path} alt="" className='imagen__peliculaA'/>
                            <br/>
                            <h3>{pelicula.title}</h3>
                            <br/>
                            <p>{"Titulo en ingles:  " + pelicula.original_title}</p>
                            <p>{"Estreno:  " + pelicula.release_date}</p>
                            <p>{"Genero:  " + pelicula.title}</p>
            
                        </div>
                    ))
                }
            </section> }
    </>
  )
}

export default HomeAdmin