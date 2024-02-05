import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mensaje from "./components/Mensaje";
import Hola from "./components/Hola";
import Libro from "./components/Libro";

const root = ReactDOM.createRoot(document.getElementById("root"));
const estudiantes = [
  { nombre: "Juan Perez", edad: 33 },
  { nombre: "Maria Lopez", edad: 22 },
  { nombre: "Carlos Andrade", edad: 25 },
  { nombre: "Luisa Posligua", edad: 35 },
  { nombre: "Luis Bone", edad: 17 },
  { nombre: "Ana Garcia", edad: 18 },
  { nombre: "Ruben Bone", edad: 19 },
  { nombre: "Maria Alcivar", edad: 20 },
];
root.render(
  <React.StrictMode>
    <App />
    <Mensaje nombre="Ruben Bone" edad="18" />
    <Mensaje nombre="Maria Alcivar" edad="20" />
    <Hola ciudad="Guayaquil" temperatura="30" />
    <Hola ciudad="Esmeraldas" temperatura="25" />
    {estudiantes.map((estudiante) => (
      <Mensaje
        nombre={estudiante.nombre}
        edad={estudiante.edad}
        key={estudiante}
      />
    ))}
    <Libro
      titulo="La sangre del padre"
      autor="Alfonso Goizueta"
      descripcion="Tras el asesinato de su padre, Alejandro asciende al trono de Macedonia. Acaba de heredar no solo el título, sino también el deber de salir victorioso en la misión que le reclama su pueblo: arrebatar a los persas las tierras que una vez fueron griegas y devolverles la libertad."
      fecha="12/01/2023"
      precio="4.99"
    />
    <Libro
      titulo="La naranja mecánica"
      autor="Anthony Burgess"
      descripcion="Al quinceañero Alex le gustan los latigazos de ultraviolencia. Junto a su pandilla de amigos, roban, matan y violan en un futuro de pesadilla, hasta que el Estado pone fin a sus desmanes. Pero ¿qué significará para él su reeducación?"
      fecha="20/08/1999"
      precio="5.99"
    />
    <Libro
      titulo="La revolución de la glucosa: el Método"
      autor="Jessie Inchauspe"
      descripcion="Este libro es el resultado de tantas y tantas de estas peticiones. En él, Jessie comparte sus trucos, recetas, listas de la compra y planes, tal y como lo haría con un buen amigo o un familiar. Se trata de una guía que abarca 4 semanas con sus 100 recetas favoritas que ayudará a los lectores a persistir en la práctica, a equilibrar sus niveles de glucosa y a empezar a sentirse mejor que nunca."
      fecha="12/12/2012"
      precio="6.99"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
