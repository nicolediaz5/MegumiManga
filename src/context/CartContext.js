import  { createContext, useContext, useState } from 'react'

  const CartContext = createContext([])

  export const useCartContext =() => useContext(CartContext)



function CartContextProvider ({children}){ // componente

const [cartList, setCartList] = useState([]) // estado del carrito 
/*
const [cantidadProd, setCantProd] = useState()
const [total, setTotal] = useState ()

useEffect (() => {
    let t = 0

    const total = cartList.map(prod => prod.precio * prod.cantidad)

    total.map(prod => t = t + prod)

    setTotal(t)

    const cartCantidad = cartList.length
    setCantProd (cartCantidad)
}, [cartList])


function isInCart(id){
    const item = cartList.find(prod => prod.id == id)
    if (item === undefined){
        return false 
    }  else {
        return true
    }
}

 */

/* if (isInCart(id)){
    const viejoProducto = cartList.find (prod => prod.id === id)
    const nuevaCantidad =  viejoProducto.cantidad + count
    const nuevoProducto = {id: viejoProducto.id, titulo: viejoProducto.titulo, picUrl: viejoProducto.picUrl, precio: viejoProducto.precio, cantidad:nuevaCantidad}
    const cartSinViejo = cartList.filter(mangaDetalle => mangaDetalle.id =! id)
    const cartConNuevo = [...cartSinViejo, nuevoProducto]
    setCartList(cartConNuevo)
} else {
    const nuevoItem = {id: mangaDetalle.id, titulo: mangaDetalle.titulo, picUrl: mangaDetalle.picUrl, precio: mangaDetalle.precio, cantidad: cantidad}
    setCartList ([...cartList, nuevoItem])
}
*/ 

/*function eliminarDelCart(id){
    conts nuevoCart = cartList.filter(mangaDetalle => mangaDetalle.id !== id)
    setCartList(nuevoCart)
}

*/

const addToCart = (mangaDetalle) => {
    setCartList([
        ...cartList,
        mangaDetalle
    ])
}

const removeCart = () => {
    setCartList([])
    /*setCantProd(0)*/
}

return (
    <CartContext.Provider value= {{
        cartList,
        addToCart,
        removeCart
    }}> 

    {children}

    </CartContext.Provider>

)
}
export default CartContextProvider 