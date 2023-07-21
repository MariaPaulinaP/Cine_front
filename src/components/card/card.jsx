import React, { useEffect, useState } from 'react'
import { traerPeliculas } from '../../service/traerPeliculas/traerPeliculas';
import './card.scss';
import { useNavigate } from 'react-router-dom';




const Card = () => {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const [data, setData] = useState([]);

    useEffect(() => {
        traerData();
    }, []);
    
    const traerData = async () => {
        const data = await traerPeliculas();
        setData(data);
    }

    const navigate =  useNavigate()
    
    
return (
    <>
        <h1>En cartelera</h1>
        <section className='container__main'>
            {
                data.map((pelicula, index) => (
                    <div key={index} className='container__div' onClick={() => {
                        navigate(`/DetallesPeliculas/${pelicula.title}`);
                      }}>
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
        </section>
    </>
  )
}

export default Card
