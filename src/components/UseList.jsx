import { useState } from "react";

const UseList = () => {
  const [list] = useState(["Pedro ", "TIago ", "Marquito "]);

  const [usuarios] = useState([ //Criar um array com nome e login de varios usuarios 
    { id: 1, nome: "Pedro", login: "pedrodbr@gmail.com" },
    { id: 2, nome: "Tiago", login: "tiago@gmail.com" }, 
    { id: 3, nome: "Marquito", login: "marquito@gmail.com" },
  ]);

  return (
    <div>
      <h3>Lista</h3>
      <ul style={{ listStyleType: "none", margin: "0px", padding: "0px" }}>
        {list.map((valorItem, numeroIndice) => (
          <li key={numeroIndice}>
            Nome {valorItem} : {numeroIndice}
          </li>
        ))}
        {/*o mapa vai verificar cada item e colocar dentro de cada li*/}
      </ul>
      <h3>Lista com userState</h3>
      <ul style={{listStyle:"none"}}>
        {usuarios.map((usuarios) => (
          <li key={usuarios.id}>
            Nome: {usuarios.nome} <br />
            Login: {usuarios.login} <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseList;
