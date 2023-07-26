import React from "react";
import ContadorBoletos from "../contadorBoletos/contadorBoletos";
import './SeleccionBoletos.scss'

function SeleccionBoletos() {
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
          {<ContadorBoletos />}
          {<ContadorBoletos />}
          {<ContadorBoletos />}
          </div>
  
        </div>
      </div>

      <div className="compra">
        <h3 className="compra__titulo">Resumen de la compra</h3>
        <article className="compra__article">
        <figure className="compra__figure">
            <img className="compra__img" src="" alt="img" />
        </figure>
        <div className="compra__funcion">
            <span>Pelicula:</span>
            <span>Ubicación:</span>
            <span>Fecha:</span>
            <span>Función:</span>
        </div>
        </article>
        <span className="compra__span">Se realiza un cargo por servicio por cada boleto dentro de la orden</span>
        <div className="compra__divTotal">
            <span className="compra__total">Total(IVA incluido)</span>
            <span className="compra__valor">$0</span>
        </div>
        <button className="compra__boton">Continuar</button>
        
      </div>

    </section>
  );
}

export default SeleccionBoletos;
