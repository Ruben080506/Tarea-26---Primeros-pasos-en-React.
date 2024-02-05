import React from "react";

function Mensaje(props) {
  return (
    <div>
      Hola: {props.nombre}, tu edad es: {props.edad}
    </div>
  );
}

export default Mensaje;