import React from 'react';
import "./NewComponent.css";

const NewComponent = () => {
  const isGerente = false;

  return (
    <div>
      <h1 
        style={ isGerente 
          ? { color: "aquamarine", backgroundColor: "Pink" } 
          : { color: "red", backgroundColor: "lightblue" } }
      >
        Aqui vem uma estilização
      </h1>
      <h3 id='cr7' style={{ fontSize: "90px", margin: "0px" }}>CR7</h3>
      <img id='fotocr7' src="CristianoRonaldo.webp" alt="Cristiano Ronaldo" />
    </div>
  );
};

export default NewComponent;



/*

style={ isGerente 
? {color:"aquamarine, backgroundcolor:"Pink"}} 
: {color: "red", backgroundcolor: "lightblue"} 

*/