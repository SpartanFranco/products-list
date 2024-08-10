import React, { useContext } from 'react'
import SvgRemove from  '../assets/images/icon-remove-item.svg'
import ContextCarts from '../context/ContextCarts'
import { TYPES } from '../types/TYPES'
import { newPrice } from '../helpers/helpers'


const ItemsInCart = ({
  image,
  name,
  quantity,
  price,
  id,
  icon
}) => {
 const{dispatch}=useContext(ContextCarts)



   const removeAll=()=>{
    dispatch({type: TYPES.REMOVE_ALL_TO_CART,payload:id})
    console.log(newPrice(price))
  }

    return (
   
    <div className='grid grid-cols-6 grid-rows-1 mt-3' >
        
      {image&&<img
      className=' col-span-1 rounded-[.7rem] mt-3 '
      src={`/products-list/src/${image.thumbnail}`} alt="" />}
      <div className='col-span-4 ml-3 '>
      <p className='font-bold'>
        {name}
        </p>

       <span className='flex mt-3'>
           <p className='text-Red font-bold'>
                 {quantity}x
            </p>
            <p className='px-3 text-Rose-400'>
                 @ ${newPrice(price)}
            </p>
               {quantity>1&& <p>
               {newPrice(price*quantity)}
                 </p>
                }
        </span>
    </div>  
    <div 
         className={`grid ${icon&&'col-span-2'} col-span-1 items-center justify-end`}>
        {icon?<div
        onClick={()=>removeAll(id)}
        className='cursor-pointer border-4 w-7 h-7 rounded-[100%] border-Rose-300 hover:border-Rose-500 hover:text-Rose-500 text-Rose-300  font-bold flex justify-center items-center text-[1.6rem] mr-3'
        >
       <img src={SvgRemove} alt="icon-remove" />
         
        </div>
         : <p className='text-[1.2rem] font-semibold'>${newPrice(price*quantity)}</p>
       }
       </div>
     
    </div>
    
   
   
  )
}

export default ItemsInCart