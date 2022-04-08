import React from 'react'
import { useCartContext } from '../context/CartContext'
import './cartstyle.css'

function Cart() {

const {cartList, addToCart, removeCart, removeCartItem} = useCartContext ()
    


return (
  <div className="block col-1">
    <h2>Mi Carrito</h2>
    <div>
      {cartList.length === 0 && <div>Carrito vacio... ¡Comience a comprar!</div>}
       
      {cartList.map((item) => (
        <div key={item.mangaDetalle.id} className="row">
          <div className="col-2">{item.mangaDetalle.titulo}</div>
          <div className="col-2">
            <button onClick={removeCartItem} className="remove">
              -
            </button>{' '}
            <button onClick={ addToCart}  className="add">
              +
            </button>
          </div>

          <div className="col-2 text-right">
            {item.mangaDetalle.cantidad} x ${item.mangaDetalle.precio}
          </div>
        </div>
      ))}

      {cartList.length !== 0 && (
        <>
          <hr></hr> 
          <div  className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div className="col-1 text-right">
              <strong >${/*{item.mangaDetalle.cantidad * item.mangaDetalle.precio}*/}</strong> 
            </div>
          </div>
          <hr />
          <button className='btn btn_add' onClick={removeCart}> Vaciar carrito</button>
        </>
      )}
    </div>
    </div>
  )
}
export default Cart