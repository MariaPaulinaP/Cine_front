import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./detallePelicula.scss";
import infoVideos from "../../service/traerVideos/TraerVideos";
import ReactPlayer from "react-player";
import { traerFunciones } from "../../service/traerBack/traerBack";

function DetallePelicula() {
  const [info, setInfo] = useState({});
  const location = useLocation();
  const [video, setVideo] = useState({});
  const { pelicula } = useParams();

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (location.state.title) {
      setInfo(location.state);
    }
  }, []);

  // const traerData = async () => {
  //   const id = getMovieFromLocalStorage().id;
  //   const dataVideo = await traerTrailer(id);
  //   setVideo(dataVideo);
  //   console.log(video);
  // };

  // useEffect(() => {
  //   traerData();
  // }, []);

  //Video
  const [media, setmedia] = useState([]);
  const [posicion, setposicion] = useState([]);
  const [generos, setgeneros] = useState("");
  const [tiempo, settiempo] = useState("");
  const [edpoint, setedpoint] =
    useState(""); 

  useEffect(() => {
    multimedia();
  }, []);

 
  const idPelicula = JSON.parse(localStorage.getItem("peliculaClick")).id
  const nombre = "Trailer";
  const idNumero = posicion.findIndex((element) => element.type == nombre);
 
  const multimedia = async () => {
    const data = await infoVideos(idPelicula);
    const key = data.videos.results[1].key;
    // const key2 = key.key
    const genero = data.genres[0].name;
    const duracion = data.runtime;
    const numero = data.videos.results;
    setmedia(key);
    setgeneros(genero);
    settiempo(duracion);
    setposicion(numero);
  };

  const fecha = localStorage.getItem("fechaClick")
  const ubicacion = localStorage.getItem("teatroClick")

  const [funcion, setfuncion] = useState([])

  useEffect(()=>{
    traerDataFuncion()
  }, [])

  const traerDataFuncion = async () =>{
    const funciones = await traerFunciones()
    
    for (const element of funciones) {
      const hora = element.programacion.horaPrimeraFuncion;
      setfuncion(hora)
      return hora
    }
  }


  return (
    <section>
      <>
        <div className="detalles">
          <div className="detalles__pelicula">
            <figure>
              <img src={URL_IMAGE + info.poster_path} alt="img_pelicula" />
            </figure>

            <article>
              <h3 className="info__titulo">{info.title}</h3>
              <span>{info.original_title}</span>
              <div className="info__pelicula">
                <span className="span__infoB">B</span>
                <span className="span__infoDuracion">{`${tiempo} Minutos`}</span>
                <span className="span__infoGenero">{`${generos}`}</span>
              </div>
            </article>
          </div>

          <div className="detalles__funcion">
            <h4 className="detalles__funcion__titulo">
              Horarios disponibles - {`${fecha}`}
            </h4>
            <span>Elije el horario que prefieras</span>
            <span className="centro__comercial">{`${ubicacion}`}</span>
            
         
              <button className="btn-horas"></button>
               
            
           

            <button className="boleto">Seleccionar boletos</button>
          </div>
        </div>

        <div className="trailer">
          <span>Trailer</span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${media}`}
            width="38%"
            height="280px"
            controls
            playing
          />
        </div>

        <div className="sinopsis">
          <span className="sinopsis__titulo">Sinopsis</span>
          <p className="sinopsis__parrafo">{info.overview}</p>
        </div>
      </>
    </section>
  );
}

export default DetallePelicula;
