import React, { useState } from "react";
import ChairIcon from '@mui/icons-material/Chair';
import { compraHecha } from "./array";

const Asientos = () => { 
  const filas = 9;
  const columnas = 16;

  const [seleccionar, setSeleccionar] = useState([{ codeSeat: "e7" }]);

  const generarAsientos = () => {
    const asientos = [];

    for (let index = 0; index < filas; index++) {
      const arrayFilas = [];
      for (let position = 0; position < columnas; position++) {
        const codeSeat = `${String.fromCharCode(65 + index)}${position + 1}`;
        
        // Verificar si el asiento está ocupado o seleccionado
        const ocupado = compraHecha.some(item => item.codeSeat === true);
        const seleccionado = seleccionar.some(item => item.codeSeat === codeSeat);
        
        // Añadir el icono de ChairIcon y el botón del asiento en un contenedor
        arrayFilas.push(
          <div key={codeSeat} style={{ display: "flex", alignItems: "center" }}>
            <ChairIcon
              sx={{
                color: ocupado ? "red" : seleccionado ? "yellow" : "blue",
                cursor: "pointer",
                marginRight: "5px",
              }}
            />
            {/* <button style={{ width: '50px', height: '50px', margin: '5px' }}>
              {codeSeat}
            </button> */}
          </div>
        );
      }

      // Añadir el arrayFilas al array de asientos
      asientos.push(<div key={index} style={{ display: "flex" }}>{arrayFilas}</div>);
    }

    return asientos;
  };


  return (
    <>
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

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {generarAsientos()}
      </div>
    </>
  );
};

export default Asientos;