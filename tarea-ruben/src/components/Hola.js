import React from "react";

export default function Hola({ ciudad, temperatura }) {
  return (
    <div>
      Hola, bienvenido a {ciudad}, la temperatura es: {temperatura}
    </div>
  );
}