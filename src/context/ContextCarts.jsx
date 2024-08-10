import { createContext,  useReducer, useState } from "react";
import dataJson from'../data.json'
import { initialState, reducerList } from "../reducers/reducerCart";



const ContextCarts=createContext();


const CartsProvider=({children})=>{
const [isModal, setIsModal] = useState(false);
const [state, dispatch] = useReducer(reducerList,initialState);


const db=  JSON.parse(JSON.stringify(dataJson)) ;



let totalItems=state.cartItems.reduce((acc,item)=>acc+item.quantity,0)
let totalPrice=state.cartItems.reduce((acc,item)=>acc+(item.quantity*item.price),0)

    const data={
        db,
        state,
        dispatch,
        totalItems,
        totalPrice,
        isModal,
        setIsModal,
      
    }

    return (
        <ContextCarts.Provider value={data}>
            {children}
        </ContextCarts.Provider>
    )

}

export {CartsProvider}
export default ContextCarts