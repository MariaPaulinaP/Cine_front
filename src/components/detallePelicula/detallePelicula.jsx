import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./detallePelicula.scss";
import { traerPeliculas } from "../../service/traerPeliculas/traerPeliculas";
import { getMovieFromLocalStorage } from "../../utils/localStorage";
import { traerTrailer } from "../../service/traerVideos/getVideoMovie";


function DetallePelicula() {
   
  const [info, setInfo] = useState({});
  const location = useLocation()
  const [data, setData] = useState([]);
  const [video, setVideo] = useState({})
  const {pelicula} = useParams();

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const URL_YOUTUBE = "https://www.youtube.com/watch?v="
//   const URL_VIDEO = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=dcfd9125c0df54a017e18f723aeebb38&append_to_response=videos`

  useEffect(() => {
    if(location.state.title) {
        setInfo(location.state)
    } 
  }, []);

  const traerData = async () => {
    // const data = await traerPeliculas();
    // setData(data);

    const id = getMovieFromLocalStorage().id;
    const dataVideo = await traerTrailer(id)
    setVideo(dataVideo)
    console.log(video)
  };

  useEffect(() => {
    // setTimeout(() => {
      
    // }, 3000);
    traerData();
   
  }, []);


  return (
    
    <section>

        {/* {(video != 0)? ( */}
          <>
          <div className="detalles">
          <div className="detalles__pelicula">
            <figure>
              <img src={URL_IMAGE + info.poster_path} alt="img_pelicula" />
            </figure>

            <article>
              <h3 className="info__titulo">{info.title}</h3>
              <span>Spider-Man: No way home (EUA, 2021)</span>
              <div className="info__pelicula">
                <span className="span__infoB">B</span>
                <span className="span__infoDuracion">Duracion</span>
                <span className="span__infoGenero">G</span>
              </div>
            </article>
          </div>

          <div className="detalles__funcion">
            <h4 className="detalles__funcion__titulo">
              Horarios disponibles - 07 de julio
            </h4>
            <span>Elije el horario que prefieras</span>
            <span className="centro__comercial">Centro comercial</span>
            <button className="btn-horas">Hora</button>
            <button className="boleto">Seleccionar boletos</button>
          </div>
          </div>

          <div className="trailer">
          {/* <span>{console.log(video[0].key)}</span> */}
          {/* <span>{video}</span> */}
        
          {/* <iframe src={`https://www.youtube.com/watch?v=${video[0].key}`} frameborder="0"></iframe> */}
          </div>

          <div className="sinopsis">
          <span className="sinopsis__titulo">Sinopsis</span>
          <p className="sinopsis__parrafo">{info.overview}</p>
          </div>


          </>

      {/* ):(<h1>Cargando</h1>)
              } */}
      
     
    </section>
  )
}

export default DetallePelicula;
