import React from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../context/CartContext'
import './cartstyle.css'


function Cart() {

const {cartList, addToCart, removeCart, removeCartItem, precioTotal} = useCartContext ()
 
/*
const precioProds=  cartList.reduce((acc, c) => acc + c.item.count * c.item.precio, 0) 
const totalCart = precioProds*/

return (
  <div className="block col-1">
    <h2>Mi Carrito</h2>
    <div>
      {cartList.length === 0 &&  <Link to={"/"}><button className="btn_empty">Carrito vacio... ¡Comience a comprar!</button> </Link>}  

      {cartList.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.titulo}</div>
          <div className="col-2">
            <button onClick={ removeCartItem} className="remove"> {/*lei mal la consigna y pense que habia que poner para eliminar y agregar item*/}
              -
            </button>{' '}
            <button onClick={ addToCart }  className="add">
              +
            </button>
          </div>

          <div className="col-2 text-right">
            {item.count} x ${item.precio}
          </div>
        </div>
      ))}

{cartList.length !== 0 && (
        cartList.map((item) => (
        <>
          <hr></hr> 
          <div  className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div key={item.id} className="col-1 text-right">
              ${precioTotal() !== 0 && <strong >{precioTotal()}</strong> }
            </div>
          </div>
          <hr />
          <button className='btn btn_add' onClick={removeCart}> Vaciar carrito</button>
        </>
        ))
      )}
    </div>
    </div>
  )
}
export default Cart