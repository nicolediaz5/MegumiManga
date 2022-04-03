import  { createContext } from 'react'

 export const CartContext = createContext([])


function CartContexProvider ({childer}){ // componente
return (
    <CartContexProvider value= {{}}> 

    {childer}
    </CartContexProvider>
    
)
}
export default CartContexProvider 