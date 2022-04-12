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
/*
const addToCart = (mangaDetalle) => {
    const existeProd = cartList.find(prod => prod.id === mangaDetalle.id) // para ver si existe el producto chequeamos que tengan el mismo id...
    if (existeProd) { // ...si el producto existe tengo que aumentar su cantidad
        setCartList(cartList.map(prod => prod.id === mangaDetalle.id ? {...existeProd, count: existeProd.count + 1} : prod)) //los prodcutos quedan igual salvo el que tiene el mismo id que lo tengo que aumentar en cantidad
    } else {
        setCartList([...cartList, {...mangaDetalle, count: 1}]) // si el prodcuto no existe lo agrego
    }
}*/
/*
const removeCartItem = (mangaDetalle) => {
const existeProd = cartList.find((prod) => prod.id === mangaDetalle.id) // en el carrito buscamos un producto que tenga el id
if (existeProd.count === 1) { //la cantidad es uno y el usuario quiero eliminar el producto
setCartList(cartList.filter((prod) => prod.id  !== mangaDetalle.id))
} else { // si la cantidad es mas de 2-3-4  y el usuario quiero bajarla a 1 
     setCartList(cartList.map(prod => prod.id === mangaDetalle.id ? {...existeProd, count: existeProd.count - 1} : prod))
}
}
*/

const removeCartItem = (mangaDetalle) => {
   setCartList(cartList.filter(p => p.id !== mangaDetalle.id)) 
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
        /*removeCartItem*/
        removeCartItem,
        precioTotal

    }}> 

    {children}

    </CartContext.Provider>

)
}
export default CartContextProvider