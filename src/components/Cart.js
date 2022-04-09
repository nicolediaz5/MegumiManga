import React from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../context/CartContext'
import './cartstyle.css'


function Cart() {

const {cartList, addToCart, removeCart, removeCartItem} = useCartContext ()
 
/*
const precioProds=  cartList.reduce((a, c) => a + c.mangaDetalle.precio * c.magaDetalle.count, 0) 
const totalCart = precioProds*/

return (
  <div className="block col-1">
    <h2>Mi Carrito</h2>
    <div>
      {cartList.length === 0 &&  <Link to={"/"}><button className="btn_empty">Carrito vacio... ¡Comience a comprar!</button> </Link>}  

      {cartList.map((item) => (
        <div key={item.mangaDetalle.id} className="row">
          <div className="col-2">{item.mangaDetalle.titulo}</div>
          <div className="col-2">
            <button onClick={ removeCartItem(item.id)} className="remove"> {/*lei mal la consigna y pense que habia que poner para eliminar y agregar item*/}
              -
            </button>{' '}
            <button onClick={ addToCart}  className="add">
              +
            </button>
          </div>

          <div className="col-2 text-right">
            {item.mangaDetalle.count} x ${item.mangaDetalle.precio}
          </div>
        </div>
      ))}

      {cartList.length !== 0 && ( // si el largo no es igual a 0 mostrame este total
        <>
          <hr></hr> 
          <div  className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div  className="col-1 text-right">
              <strong >${/*{totalCart}*/}</strong> 
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