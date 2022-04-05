import React from 'react'
import { useCartContext } from '../context/CartContext'

function Cart() {

const {cartList, removeCart} = useCartContext ()
    
  return (
    <div>
<h1>Carrito</h1>
         {cartList.map(item => <h2 key={item.id} > {item.titulo} </h2>)}
<button className='btn btn_add' onClick={removeCart}> Vaciar carrito</button>
    </div>
  )
}
export default Cart