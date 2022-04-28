import  { createContext, useContext, useState } from 'react'

  const CartContext = createContext([])

  export const useCartContext =() => useContext(CartContext)



function CartContextProvider ({children}){ 


const [listaCarrito, setListaCarrito] = useState([]) 


const añadirAlCarrito = (mangaDetalle) => {
    
   
    if (listaCarrito.filter((p)=>p.id === mangaDetalle.id).length > 0){
       
    } else {
        setListaCarrito([...listaCarrito, {...mangaDetalle}])
    }
       }


const removerItem = (id) => {
    setListaCarrito(listaCarrito.filter(p => p.id !== id)) 
} 

const cantTotalItem = () => {
    return listaCarrito.reduce ((acum, p) => acum += p.count, 0)
}

const removerCarrito = () => {
    setListaCarrito([])
    
}


const precioTotal = () => {
    return listaCarrito.reduce((acum, p) => acum + ( p.count * p.precio), 0)
}

return (
    <CartContext.Provider value= {{
        listaCarrito,
        añadirAlCarrito,
        removerCarrito,
        removerItem,
        precioTotal,
        cantTotalItem

    }}> 

    {children}

    </CartContext.Provider>

)
}
export default CartContextProvider