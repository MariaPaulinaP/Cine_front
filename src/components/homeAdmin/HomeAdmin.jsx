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

        {  <h1 className='cartelera'>En cartelera</h1> }

            { <section className='container__main'>
                {
                    data.map((pelicula, index) => (
                        <div key={index} className='container__div' onClick={() => {clickPelicula(pelicula) }}>
                            <img src={URL_IMAGE + pelicula.poster_path} alt="" className='imagen__pelicula'/>
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