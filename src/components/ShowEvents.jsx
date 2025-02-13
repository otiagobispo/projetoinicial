import React from 'react'

const ShowEvents = () => {
    const teste = (e) => {
        console.log(e)
    }
    
  return (
    <div>
      <button onDoubleClick={teste}>Ativa Funcão Externa</button>
      <button onClick={() => console.log('Função interna')}>Ativa a função Interna</button>
    </div>
  )
}

export default ShowEvents
