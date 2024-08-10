
import iconCart from '../assets/images/icon-add-to-cart.svg'
import iconAdd from '../assets/images/icon-increment-quantity.svg'
import iconRest from '../assets/images/icon-decrement-quantity.svg'

import ContextCarts from '../context/ContextCarts';
import { newPrice } from '../helpers/helpers';
import { useWidthScreen } from '../hooks/useWidthScreen';
import { TYPES } from '../types/TYPES';
import { useContext } from 'react';




const Cart = ({data,id}) => {
  const{state,dispatch}=useContext(ContextCarts)
  const [width]=useWidthScreen()
  const{image,name,category,price}=data;
  const{ mobile, tablet,desktop}=image;

  let widthScreen=(widthS)=>{
    if(widthS>640) return tablet
    else if(widthS<768)return desktop
    else return mobile
  }
  const handleAdd=(id)=>{
    dispatch({type:TYPES.ADD_TO_CART,payload:{...data,id}})
  } 
  const removeOne=(id)=>{
    dispatch({type:TYPES.REMOVE_TO_CART,payload:id})
  } 
  const quantity = state.cartItems.find(
    (item) => item.id === id
  )?.quantity || 0;

  return (
    <div className=' md:p-5 mt-3 sm:p-2'>
      <div className='relative'>
        <img 
        className={` ${quantity>0?'border-Red border-4':'border-transparent'} rounded-[1rem]  w-full h-[90%] `}
        src={`/products-list/src/${widthScreen(width)}`}
          alt={name} 
        />

        <div
         className={`w-full h-[4.3rem] max-h-[4.5rem]  absolute -bottom-8 sm:-bottom-10  xl:-bottom-7 2xl:-bottom-9 flex 3xl:-bottom-16 justify-center `}>

         {quantity===0?(
          <button 
          onClick={()=>handleAdd(id)}
           className=' w-[60%] md:w-[70%] md:max-w-[13rem] h-[90%] lg:h-[4rem]  bg-white border-slate-500 hover:border-Red hover:text-Red flex justify-center items-center border-2 rounded-[1.5rem] sm:rounded-[2rem] text-[90%] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.3rem] font-[600]'>
             
          <img
          className='w-6 sm:w-7 md:w-8 lg:w-7 2xl:w-8 mr-2 '
          src={iconCart} alt={iconCart}
           />
           Add to cart
           </button>
           ):(
            <div className=' w-[60%] md:w-[70%] md:max-w-[13rem] h-[90%] lg:h-[4rem] px-4 hover:bg-[#ca3507] bg-Red text-white border-transparent  flex justify-between items-center border-2 rounded-[2rem] text-[.7rem]'>
            
                 <div 
                onClick={()=>removeOne(id)}
                 className='cursor-pointer hover:bg-white hover:text-Red border-4 border-white w-7 h-7  flex items-center justify-center  rounded-[50%] '>
                  <img src={iconRest} alt="icon-rest" />
                 </div>
             
              <p className='text-2xl'>{quantity}</p>

              <div 
               onClick={()=>handleAdd(id)}
              className='w-7 h-7 cursor-pointer hover:bg-white border-4 hover:text-Red border-white  flex items-center justify-center rounded-[50%] '>
                <img src={iconAdd} alt="icon-add" />
                 </div>
            </div>
           )
          }
       
        </div>
      </div>
      <div className='mt-10 md:text-[90%] lg:text-[1.3rem] '>
        <p className='text-Rose-400 font-[400]'>{category}</p>
        <h3 className=' font-[700]'>{name}</h3>
        <p className='text-Red font-[600]' >${newPrice(price)}</p>
      </div>
    </div>
  )
}

export default Cart