import React, { useContext } from 'react'
import ContextCarts from '../context/ContextCarts'
import Cart from './Cart'
import { useWidthScreen } from '../hooks/useWidthScreen'

const CartsContainer = () => {
  const{db}=useContext(ContextCarts)
  

  
  return (
    <div className='md:p-10 xl:ml-10' >
      <h1
      className='font-bold text-4xl sm:pl-6 pt-3'
      >Desserts</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3'>
      {db&&db.map((el,index)=>(
        <Cart 
        key={index}
         id={index}
         data={el}
        />
      ))}
      </div>
    </div>
  )
}

export default CartsContainer