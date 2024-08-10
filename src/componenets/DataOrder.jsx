import React, { useContext } from 'react'
import ItemsInCart from './ItemsInCart'
import ContextCarts from '../context/ContextCarts'
import imgCarbonNeeutral from '../assets/icon-carbon-neutral.svg'
import { newPrice } from '../helpers/helpers'


const DataOrder = () => {
 const{state,totalPrice,setIsModal}=useContext(ContextCarts)


return (
    <div >
       
          <div
        
           className='max-h-[25rem] overflow-y-auto grid grid-cols-1 sm:justify-center sm:items-center'>
            {state.cartItems&&
                state.cartItems.map((item,index)=>(
                <div key={index} >
                <ItemsInCart
                 id={item.id}
                 name={item.name}
                 quantity={item.quantity}
                 price={item.price} 
                 icon={true}
                 />
                 <hr />
                 </div>
                ))
                 }
                 </div>
               <div className=' mt-5 flex flex-col'>
                 <div
                 className='flex justify-between items-center'
                 >
                 <p className='font-semibold'>Order total</p>
                 <p className='font-bold text-3xl p-1' >
                  ${newPrice(totalPrice)}
                  </p>
              </div>
              <div className='flex justify-center p-4 w-full bg-Rose-100 rounded-[.8rem]'>
                 <img src={imgCarbonNeeutral} alt="img-carbon-neutral" />
                 <p>This is a <strong>carbon neutral</strong> delivery</p>
                  </div>
                  <button 
                  onClick={()=>setIsModal(true)}
                  className='bg-Red w-full hover:bg-[#ca3507] p-3 rounded-[1.5rem] mt-5 text-white font-bold'>
                    Confirm Order
                  </button>
          </div>
    </div>
  )
}

export default DataOrder