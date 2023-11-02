import React, { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [animal, setAnimal] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorAnimal, setErrorAnimal] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (animal.trim().length < 3 || animal.trim().startsWith(" ")) {
      setErrorAnimal("El tipo de animal debe tener al menos 3 caracteres y no empezar con un espacio en blanco.");
      return;
    } else {
      setErrorAnimal("");
    }

    if (nombre.trim().length < 6) {
      setErrorNombre("El nombre debe tener al menos 6 caracteres.");
      return;
    } else {
      setErrorNombre("");
    }

    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingresa tu animal favorito:</label>
          <input
            type="text"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          />
          {errorAnimal && <div className="error">{errorAnimal}</div>}
        </div>
        <div>
          <label>Ingresa tu nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errorNombre && <div className="error">{errorNombre}</div>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card nombre={nombre} animal={animal} />}
    </div>
  );
};

export default Formulario;



