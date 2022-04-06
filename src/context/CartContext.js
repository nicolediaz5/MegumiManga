import  { createContext, useContext, useState } from 'react'

  const CartContext = createContext([])

  export const useCartContext =() => useContext(CartContext)



function CartContextProvider ({children}){ // componente

const [cartList, setCartList] = useState([]) // estado del carrito 




const addToCart = (mangaDetalle) => {
    const existeProd = cartList.find(prod => prod.mangaDetalle.id === mangaDetalle.id)
    if (existeProd) {
        setCartList(cartList.map(prod => prod.mangaDetalle.id === mangaDetalle.id ? {...existeProd, count: existeProd.count + 1} : prod))
    } else {
        setCartList([...cartList, {...mangaDetalle, count: 1}])
    }
}
/*
const removeCartItem = (mangaDetalle) => {
const existeProd = cartList.find((prod) => prod.mangaDetalle.id === mangaDetalle.id) // en el carrito buscamos un producto que tenga el id
if (existeProd.count === 1) { //la cantidad es uno y el usuario quiero eliminar el producto
setCartList(cartList.filter((prod) => prod.mangaDetalle.id  !== mangaDetalle.id))
} else { // si la cantidad es mas de 2-3-4  y el usuario quiero bajarla a 1 
     setCartList(cartList.map(prod => prod.mangaDetalle.id === mangaDetalle.id ? {...existeProd, count: existeProd.count - 1} : prod))
}
}

*/

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

return (
    <CartContext.Provider value= {{
        cartList,
        addToCart,
        removeCart,
        /*removeCartItem*/
    }}> 

    {children}

    </CartContext.Provider>

)
}
export default CartContextProvider