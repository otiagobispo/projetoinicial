import { useState } from "react";

const TestUseState = () => {
  let num = 10; //variavel global
  console.log(num);

  const  [ number, setNumber ]  = useState(7); //variavel com use state

  //o h2 e o h3 são para mostrar o valor da variavel global e do use state, o botão é para trocar o valor da variavel global (tentar) e do use state; E dentro do botão tem funções para trocar o valor e o console log

  return (
    <div>
      <h2>Teste de troca de numero sem use state</h2> {/*titulo*/}
      <h3>Valo atual: {num}</h3>{/*titulo para mostar o valor da variavel num*/}
      <button
        style={{ backgroundColor: "orange", color: "black" }}
        onClick={() => ((num = 20), console.log(num))}
      > {/*Style para estilizar e função de flecha para mostrar a variavel num*/}
        Trocar
      </button>

      <h2>Teste de troca de numero sem use state</h2>{/*titulo */}
        <h3>Valo atual: { number }</h3>{/*titulo para mostrar o valor da variavel number*/}
        <button style={{margin:'5px', borderRadius:'200px'}} onClick={() => {setNumber(number - 1)}}>-</button> {/*style para aumentar a margin do butao e um função dentro do setnumber para  alterar o valor da variavel number  subtraindo ele */}
        <button style={{margin:'5px', borderRadius:'200px'}} onClick={() => {setNumber(number + 1)}}>+</button>{/*style para aumentar a margin do butao e um função dentro do setnumber para  alterar o valor da variavel number  somando ele*/}
        <button style={{margin:'5px', borderRadius:'200px'}} onClick={() => {setNumber(7)}}>Resetar</button>{/*style para aumentar a margin do butao e um função dentro do setnumber para  alterar o valor da variavel number  resetando ele para 7*/}

    </div>
  );
};

export default TestUseState;
