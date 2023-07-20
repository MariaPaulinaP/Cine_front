import React, { useEffect, useState } from 'react'
import { traerPeliculas } from '../../service/traerPeliculas/traerPeliculas';
import './card.scss';




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
    
return (
    <>
        <h1>En cartelera</h1>
        <section className='container__main'>
            {
                data.map((pelicula, index) => (
                    <div key={index}>
                        <img src={URL_IMAGE + pelicula.poster_path} alt="" className='imagen__pelicula'/>
                        <h5>{pelicula.title}</h5>

                        <p>{"titulo en ingles:  " + pelicula.original_title}</p>
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
