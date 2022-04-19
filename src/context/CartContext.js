import  { createContext, useContext, useState } from 'react'

  const CartContext = createContext([])

  export const useCartContext =() => useContext(CartContext)



function CartContextProvider ({children}){ // componente

const [cartList, setCartList] = useState([]) // estado del carrito 


const addToCart = (mangaDetalle) => {
    console.log('MANGA DETALLE',mangaDetalle)
   
    if (cartList.filter((p)=>p.id === mangaDetalle.id).length > 0){
        console.log('producto existente en cart')
    } else {
        setCartList([...cartList, {...mangaDetalle}])
    }
       }


const removerItem = (id) => {
   setCartList(cartList.filter(p => p.id !== id)) 
} 



const cantTotalItem = () => {
    return cartList.reduce ((acum, p) => acum += p.count, 0)
}


/*
const addToCart = (mangaDetalle) => {
    setCartList([
        ...cartList,
        mangaDetalle
    ])
}
*/

const removeCart = () => {
    setCartList([])
    
}


const precioTotal = () => {
    return cartList.reduce((acum, p) => acum + ( p.count * p.precio), 0)
}



return (
    <CartContext.Provider value= {{
        cartList,
        addToCart,
        removeCart,
        removerItem,
        precioTotal,
        cantTotalItem

    }}> 

    {children}

    </CartContext.Provider>

)
}
export default CartContextProvider