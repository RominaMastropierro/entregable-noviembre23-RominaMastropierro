import React from "react";

const Card = ({ nombre, animal }) => {
  return (
    <div className="card">
      <h2>Hola {nombre}, tu animal favorito es {animal}</h2>
    </div>
  );
};

export default Card;

