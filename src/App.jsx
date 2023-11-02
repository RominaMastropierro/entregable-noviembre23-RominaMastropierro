import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./components/Formulario";
import Card from "./components/Card";



function App() {
 

  return (
    <div className="App">

      <h1>Elige tu animal favorito</h1>
      <Formulario/>
      <Card/>
     
    </div>
  );
}

export default App;
