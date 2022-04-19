import React from 'react'
import { Link } from 'react-router-dom'
/*import { addDoc, collection, getFirestore} from "firebase/firestore"*/
import { useCartContext } from '../context/CartContext'
import './cartstyle.css'
import Formulario from './Formulario'


function Cart() {

const {cartList, removeCart, removerItem, precioTotal} = useCartContext ()
 /*
const generarOrden = (e) => {
e.preventDefault();


let orden = {}

orden.comprador = { nombre: "Nicole", email: "nicole@gmail.com", telefono: "03414853066"}
orden.total = precioTotal()

orden.items = cartList.map( itemCarrito => {
  const id = itemCarrito.id
  const titulo = itemCarrito.titulo
  const precio = itemCarrito.precio * itemCarrito.count
  const cantidad = itemCarrito.count

  return { id, titulo, precio, cantidad}


})


// creacion de doc en firebase para la orden de compra 

const db = getFirestore ()
const queryCollection = collection (db, 'ordenes' )
addDoc( queryCollection, orden)
.then(({id}) => alert("Este es tu codigo de compra: " + id))
.catch((err) => console.log(err))
.finally(removeCart)

}*/
return (
  <div className="block col-1">
    <h2>Mi Carrito</h2>
    <div>
      {cartList.length === 0 &&  <Link to={"/"}><button className="btn_empty">Carrito vacio... ¡Comience a comprar!</button> </Link>}  

      {cartList.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.titulo}</div>
          <div className="col-2">
            <button onClick={ () => removerItem(item.id)} className="remove"> 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
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
          {/*<button className='btn btn_finish' onClick={generarOrden}> Realizar Compra</button>*/}
          <Formulario /> 
        </>
        ))
      )}
      
    </div>
    </div>
  )
}
export default Cart