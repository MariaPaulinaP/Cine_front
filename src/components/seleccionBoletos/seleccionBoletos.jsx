import React, { useEffect, useState } from "react";
import ContadorBoletos from "../contadorBoletos/contadorBoletos";
import './SeleccionBoletos.scss'



function SeleccionBoletos() {

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  
  const {title} = JSON.parse(localStorage.getItem("peliculaClick"))
  const {poster_path} = JSON.parse(localStorage.getItem("peliculaClick"))
  const ubicacion = localStorage.getItem("teatroClick")
  const fecha = localStorage.getItem("fechaClick")
  const hora = localStorage.getItem("hora")

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);


  const incrementar1 = () =>{
    setValue1(value1 + 1)
  }
  const decrementar1 = () =>{
    if(value1 > 0){
      setValue1(value1 - 1)
    }
  }
  const incrementar2 = () =>{
    setValue2(value2 + 1)
  }
  const decrementar2 = () =>{
    if(value1 > 0){
      setValue2(value2 - 1)
    }
  }
  const incrementar3 = () =>{
    setValue3(value3 + 1)
  }
  const decrementar3 = () =>{
    if(value3 > 0){
      setValue1(value3 - 1)
    }
  }
 
console.log(value1);
console.log(value2);
console.log(value3);
  return (

    
    <section className="section">
    <div className="seleccion">
        <h3 className="seleccion__titulo">Selecciona tus boletos</h3>
        <span className="seleccion__span">Puedes comprar máximo 10 boletos por transacción</span>
        <div className="seleccion__boletos">
          <div className="seleccion__boletos__categoria">
            <span>ADULTO</span>
            <span>NIÑOS</span>
            <span>3ERA EDAD</span>
          </div>
          <div className="seleccion__boletos__precio">
            <span>$71</span>
            <span>$56</span>
            <span>$56</span>
          </div>

          
          <div className="seleccion__boletos__cantidad">
            { 
              <ContadorBoletos
                value={value1}
                handlePLus={incrementar1}
                handleMinus={decrementar1}
              />
            }
            { 
              <ContadorBoletos
                value={value2}
                handlePLus={incrementar2}
                handleMinus={decrementar2}
              />
            }
            { 
              <ContadorBoletos
                value={value3}
                handlePLus={incrementar3}
                handleMinus={decrementar3}
              />
            }
           
          </div>
         
        </div>
      </div>

      <div className="compra">
        <h3 className="compra__titulo">Resumen de la compra</h3>
        <article className="compra__article">
        <figure className="compra__figure">
            <img className="compra__img" src={URL_IMAGE+poster_path} alt="img" />
        </figure>
        <div className="compra__funcion">
            <span>Pelicula: {title}</span>
        
            <span>Ubicación: {ubicacion}</span>
            
            <span>Fecha: {fecha}</span>
            
            <span>Función: {hora}</span>
            
        </div>
        </article>
        <span className="compra__span">Se realiza un cargo por servicio por cada boleto dentro de la orden</span>
        <div className="compra__divTotal">
            <span className="compra__total">Total(IVA incluido)</span>
            <span className="compra__valor">{`$ ${"hola"}}`}</span>
            <h1>hola</h1>
        </div>
        <button className="compra__boton">Continuar</button>
        
      </div>

    </section>
  );
}

export default SeleccionBoletos;
