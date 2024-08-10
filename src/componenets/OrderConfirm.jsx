import React, { useContext } from 'react'
import ContextCarts from '../context/ContextCarts'
import ItemsInCart from './ItemsInCart'
import imgConfirmed from '../assets/icon-order-confirmed.svg'
import { TYPES } from '../types/TYPES'
import { newPrice } from '../helpers/helpers'

const OrderConfirm = () => {
    const{state,totalPrice,isModal,setIsModal,dispatch}=useContext(ContextCarts)
 
    const confirmed=()=>{
      if(!isModal)setIsModal(true)
        else setIsModal(false)
    dispatch({type:TYPES.CLEAR})
    }
 
    return (
    <div 
    onClick={()=>setIsModal(false)}
    className='fixed top-0 left-0 w-full pt-20 pb-10 h-screen flex justify-center  items-center z-10  bg-[#1715156c] '>
        
        <div 
    onClick={(e)=>e.stopPropagation()}
    className={`bg-white p-6  w-full  max-h-screen  lg:w-[30%]  rounded-[1rem]  grid grid-cols-1`}>
           
           <div className="cols-span-1 ">
            <img src={imgConfirmed} alt="icon-confirmed" />
           <h1  className='text-4xl font-bold mt-4 w-[30%]'>
            Order Confirmed
           </h1>  
           <p className='text-Rose-400  mt-3 mb-7'>
            We hope you enjoy your food!
            </p>  
           </div>

          <div className='bg-gray-100 p-5'>
        <div className='grid gap-3 '>
         <div className='max-h-60 overflow-hidden overflow-y-scroll'>
          {
                   state.cartItems.map((item)=>
              
                <ItemsInCart  
                   key={item.id} 
                   image={item.image}
                   name={item.name}
                   quantity={item.quantity}
                   price={item.price}
                   />
                 
                )
                 }
        </div>
               <div className="flex justify-between items-center ">
                 <p className='text-Rose-400'>Order total</p>
                 <p className='font-bold text-2xl p-1'>${newPrice(totalPrice)}</p>
              </div>
              </div>
              </div>
                  <button 
                  onClick={confirmed}
                  className='w-full p-4 mt-3  text-white bg-Red hover:bg-[#ca3507] rounded-[2rem]  font-bold'>
                    Start new order
                  </button>
          
    </div>
    </div>
  )
}

export default OrderConfirm