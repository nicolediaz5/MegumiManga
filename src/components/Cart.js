import React from 'react'
import { useCartContext } from '../context/CartContext'

function Cart() {

const {cartList} = useCartContext ()
    
  return (
    <div>
<h1>Carrito</h1>
         {cartList.map(prod => <li key={prod.id}> nombre : {prod.titulo}</li>)}

    </div>
  )
}
export default Cart