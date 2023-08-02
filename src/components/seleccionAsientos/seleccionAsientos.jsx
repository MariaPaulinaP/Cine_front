import React, { useState } from "react";
import ChairIcon from "@mui/icons-material/Chair";
import { traerTiquetesComprados } from "../../service/traerTiquetesComprados/traerTiquetesComprados";
import { useNavigate } from "react-router-dom";

// import { compraHecha } from "./array";

function SeleccionAsientos() {

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const {title} = JSON.parse(localStorage.getItem("peliculaClick"))
  const {poster_path} = JSON.parse(localStorage.getItem("peliculaClick"))
  const ubicacion = localStorage.getItem("teatro")
  const fecha = localStorage.getItem("fecha")
  const hora = localStorage.getItem("hora")
  const total = localStorage.getItem("totalPagar")

  const teatro = localStorage.getItem("teatro");
  const idPelicula = localStorage.getItem("idPelicula");


  const navigate = useNavigate()

  const clickTotalPagar = () => {
    navigate("/compraBoletos");
  }

  const [filters, setFilters] = useState({});
  const [tickets, setTickets] = useState({});
  const [seleccionSilla, setSeleccionSilla] = useState([]);
  const [details, setDetails] = useState({});
  const [posicion, setPosicion] = useState(0);

  

  const parametros = { teatro, fecha, hora, idPelicula };
  // setFilters(parametros)

  const asientosOcupados = traerTiquetesComprados.filter(
    (item) =>
      item.idCinema === filters.cines &&
      item.idSala === details.idSala &&
      item.date === filters.date &&
      item.hour === details.horaFuncion
  );
  console.log(asientosOcupados);

  const filas = 9;
  const columnas = 16;

  const generarAsientos = () => {
    const asientos = [];

    for (let index = 0; index < filas; index++) {
      const arrayFilas = [];
      for (let position = 0; position < columnas; position++) {
        const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;

        // Verificar si el asiento está ocupado o seleccionado
        const ocupado = asientosOcupados.some((item) => item.codeSeat === true);
        const seleccionado = seleccionSilla.some(
          (item) => item.codeSeat === codeSeat
        );

        // Añadir el icono de ChairIcon y el botón del asiento en un contenedor
        arrayFilas.push(
          <div key={codeSeat} style={{ display: "flex", alignItems: "center" }}>
            <ChairIcon
              sx={{
                color: ocupado ? "red" : seleccionado ? "yellow" : "blue",
                cursor: "pointer",
                marginRight: "5px",
              }}
              onClick={() => {
                const cantidadTotal = tickets.reduce(
                  (total, item) => total + item.cantidad,
                  0
                );
                if (seleccionSilla.length < cantidadTotal) {
                  setSeleccionSilla([...seleccionSilla, codeSeat]);
                  setDetails({
                    ...details,
                    asientos: [...seleccionSilla, codeSeat],
                  });
                }
                if (seleccionSilla.length === cantidadTotal) {
                  const seat = [...seleccionSilla];
                  seat[posicion] = codeSeat;
                  setseleccionSilla([...seat]);

                  const nuevaPosicion =
                    seleccionSilla.length - 1 === posicion ? 0 : posicion + 1;
                  setPosicion(nuevaPosicion);
                  setDetails({ ...details, asientos: [...seat] });
                }
              }}
            />
          </div>
        );
      }

      // Añadir el arrayFilas al array de asientos
      asientos.push(
        <div key={index} style={{ display: "flex" }}>
          {arrayFilas}
        </div>
      );
    }

    return asientos;
  };

  return (
    <>
      <section>
        <h1>Selecciona tus asientos</h1>
        <h5>Para cambiar tu lugar asignado da click en el asiento deseado.</h5>
        <div>
          <ChairIcon sx={{ color: "yellow" }} />
          <span>Seleccion</span>
        </div>

        <div>
          <ChairIcon sx={{ color: "red" }} />
          <span>ocupado</span>
        </div>

        <div>
          <ChairIcon sx={{ color: "blue" }} />
          <span>disponible</span>
        </div>

        <br />
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {generarAsientos()}
        </div>
      </section>

      <section>
        <div className="compra">
          <h3 className="compra__titulo">Resumen de la compra</h3>
          <article className="compra__article">
            <figure className="compra__figure">
              <img
                className="compra__img"
                src={URL_IMAGE + poster_path}
                alt="img"
              />
            </figure>
            <div className="compra__funcion">
              <span>Pelicula: {title}</span>

              <span>Ubicación: {ubicacion}</span>

              <span>Fecha: {fecha}</span>

              <span>Función: {hora}</span>
            </div>
          </article>
          <span className="compra__span">
            Se realiza un cargo por servicio por cada boleto dentro de la orden
          </span>
          <div className="compra__divTotal">
            <span className="compra__total">Total(IVA incluido)</span>
            <span className="compra__valor">{total}</span>
          </div>
          <button onClick={clickTotalPagar} className="compra__boton">
            Continuar
          </button>
        </div>
      </section>
    </>
  );
}

export default SeleccionAsientos;

// import React, { useState } from "react";
// import ChairIcon from '@mui/icons-material/Chair';
// // import { compraHecha } from "./array";

// const SeleccionAsientos = () => {

// //   const filas = 9;
// //   const columnas = 16;

// // //   const [seleccionar, setSeleccionar] = useState([{ codeSeat: "e7" }]);

// //   const generarAsientos = () => {
// //     const asientos = [];

// //     for (let index = 0; index < filas; index++) {
// //       const arrayFilas = [];
// //       for (let position = 0; position < columnas; position++) {
// //         const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;

// //         // Verificar si el asiento está ocupado o seleccionado
// //         const ocupado = compraHecha.some(item => item.codeSeat === true);
// //         const seleccionado = seleccionar.some(item => item.codeSeat === codeSeat);

// //         // Añadir el icono de ChairIcon y el botón del asiento en un contenedor
// //         arrayFilas.push(
// //           <div key={codeSeat} style={{ display: "flex", alignItems: "center" }}>
// //             <ChairIcon
// //               sx={{
// //                 color: ocupado ? "red" : seleccionado ? "yellow" : "blue",
// //                 cursor: "pointer",
// //                 marginRight: "5px",
// //               }}
// //             />
// //             {/* <button style={{ width: '50px', height: '50px', margin: '5px' }}>
// //               {codeSeat}
// //             </button> */}
// //           </div>
// //         );
// //       }

// //       // Añadir el arrayFilas al array de asientos
// //       asientos.push(<div key={index} style={{ display: "flex" }}>{arrayFilas}</div>);
// //     }

// //     return asientos;
// //   };

//   return (
// //     <>
// //       <h1>Selecciona tus asientos</h1>
// //       <h5>Para cambiar tu lugar asignado da click en el asiento deseado.</h5>
// //       <div>
// //         <ChairIcon sx={{ color: "yellow" }} />
// //         <span>Seleccion</span>
// //       </div>

// //       <div>
// //         <ChairIcon sx={{ color: "red" }} />
// //         <span>ocupado</span>
// //       </div>

// //       <div>
// //         <ChairIcon sx={{ color: "blue" }} />
// //         <span>disponible</span>
// //       </div>

// //       <br />
// //       <hr />

// //       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //         {generarAsientos()}
// //       </div>
// //     </>
//  );
// };

// export default SeleccionAsientos;
