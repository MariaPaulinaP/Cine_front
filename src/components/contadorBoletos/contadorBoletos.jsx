import React, { useState } from 'react'
import './ContadorBoletos.scss'

const ContadorBoletos= () => {
  const [value, setValue] = useState(0);

  const handlePLus = () =>{
    setValue(value + 1)
  }

  const handleMinus = () =>{
    if(value > 0){
      setValue(value - 1)
    }
  }
  
  return (
    <div className='contador'>
    <button className='contador__menos' onClick={handleMinus}>-</button>
      <span className='contador__valor'>{value}</span>
      <button className='contador__mas' onClick={handlePLus}>+</button>
    </div>
  )
}

export default ContadorBoletos