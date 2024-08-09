import React, { useContext } from 'react'
import CartsContainer from './CartsContainer'
import ShoppingCart from './ShoppingCart'
import ContextCarts from '../context/ContextCarts'
import OrderConfirm from './OrderConfirm'


const MainApp = () => {
 const{isModal}=useContext(ContextCarts)
    return (
    <div className="h-fit p-5 grid sm:grid-cols-1 md:px-0 lg:grid-cols-[4fr_2fr] xl:grid-cols-[4fr_2fr] bg-Rose-50 font-red-hat-text">
      {isModal&&
      <OrderConfirm/>
      }
      <CartsContainer/>
      <ShoppingCart/>
    </div>
  )
}

export default MainApp