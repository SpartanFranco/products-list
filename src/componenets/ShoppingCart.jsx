
import { useContext } from 'react'
import iconToCart from '../assets/images/illustration-empty-cart.svg'
import ContextCarts from '../context/ContextCarts'
import DataOrder from './DataOrder'


const ShoppingCart = () => {
const{totalItems}=useContext(ContextCarts)

return (
  <div className=' lg:fixed lg:right-14 lg:w-[30%] xl:right-24 h-fit rounded-[1rem] p-6  md:mt-10 flex justify-center '>
    <div className='w-50rem bg-white p-10 rounded-[1rem] max-w-[70rem] xl:w-[80%] xl:h-[20rem]' >
        <h1 className='text-Red text-3xl font-bold pb-4 '>You Cart({totalItems})</h1>
        {
          totalItems>0?(
            <DataOrder/>
          ):(
            <div className="flex flex-col items-center mt-8 text-Rose-400">
            <img src={iconToCart} alt="img-carbon" />
            <p>You added items wills appear here</p>
      </div>
          )

        }
    </div>
    </div>
  )
}

export default ShoppingCart