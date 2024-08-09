import { TYPES } from "../types/TYPES";


export const initialState={
    cartItems:[]
}


export const reducerList=(state,action)=>{

switch (action.type) {
    case TYPES.ADD_TO_CART:{
        const existingItem = state.cartItems.find(
            (item) => item.id === action.payload.id
          );
          return existingItem? {

              ...state,
              cartItems: state.cartItems.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
          } : {
            ...state,
              cartItems: [
                ...state.cartItems,
                { ...action.payload, quantity: 1 },
              ],
          }
        } 
        case TYPES.REMOVE_TO_CART:{
          let itemDelete=state.cartItems.find(el=>el.id===action.payload)

          return itemDelete.quantity>1?{
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity -1 }
                : item
            ),
          }:{
            ...state,
            cartItems: state.cartItems.filter((item) => item.id!== action.payload)
           
          } 
        }
        case TYPES.REMOVE_ALL_TO_CART:{
          
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id!== action.payload)
           
          }
        }
        case TYPES.CLEAR:{
          return initialState
        }
    default:
        return state
}

}