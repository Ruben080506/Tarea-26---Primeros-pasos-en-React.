// 6) Cree un nuevo componente que muestra la información de un libro: Nombre del libro, Autor, Fecha de compra y precio. Llame 3 veces a este componente.
import React from "react";
import "../Libro.css";

function Libro({ titulo, autor, descripcion, fecha, precio }) {
  return (
    <div className="book-details">
      <div className="book-info">
        <h2 className="book-title">{titulo}</h2>
        <p className="book-author">{autor}</p>
        <p className="book-description">{descripcion}</p>
        <p className="book-purchase-date">Fecha de compra: {fecha}</p>
        <p className="book-price">Precio: ${precio}</p>
      </div>
    </div>
  );
}

export default Libro;
