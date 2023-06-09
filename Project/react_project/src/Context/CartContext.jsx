import { createContext, useState } from "react";

export const  CartContext = createContext()

export  function CartContextProvider({children}){
    const [cartItem, setCartItem] = useState([])
    const [product, setProducts] = useState({
        urls:"",
        brands:"",
        prices:"",
        heading:""
       })

       const updatedCartItems = [...cartItem]

     const [count, setCount]= useState(0)
//console.log(cart)


    return (
        <CartContext.Provider value={{updatedCartItems, cartItem, setCartItem,product,setProducts ,count, setCount}}>
            {children}
        </CartContext.Provider>
    )
}
