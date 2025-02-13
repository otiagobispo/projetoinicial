import React from 'react'
import NewComponent from './NewComponent'

const MyComponent = () => {
  return (
    <div style={{padding:""}}>
      <h2 style={{paddingTop:"25px"}}>Meu componente, criado por mim mesmo</h2>
      <p>Autoria: Bispo</p>
      <NewComponent/>
    </div>
  )
}

export default MyComponent
