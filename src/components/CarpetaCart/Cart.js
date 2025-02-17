import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Formulario from '../CarpetaFormulario/Formulario'
import './cartstyle.css'


function Cart() {

const {listaCarrito, removerCarrito, removerItem, precioTotal} = useCartContext ()

return (
  <div className="block col-10">
    <h2 className='tituloProd'>Mi Carrito</h2>
    <div>
      {listaCarrito.length === 0 &&
      <Link to={"/"}>
        <button className="btn_empty">
        Carrito vacio... ¡Comience a comprar!
        </button>
        </Link>}  

{listaCarrito.map((item) => (
        <div key={item.id} className="row">
          <div className="col-4">{item.titulo}</div>
          <div className="col-2">
            <button 
            onClick={ () => removerItem(item.id)} 
            className="remove"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
           </svg>       
           </button>
          </div>
          <div className="col-4 text-right">
            {item.count} x ${item.precio}
          </div>
        </div> 
      ))}

{listaCarrito.length !== 0 && (     
        <>
          <hr></hr> 
          <div className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div className="col-1 text-right"> 
             <strong>$</strong>
             {precioTotal() !== 0 && <strong >
             {precioTotal()}</strong> } 
            </div>
          </div>
          <hr />
          <button 
          className='btn btn_add' onClick={removerCarrito}>
             Vaciar carrito
          </button>
          <Link to={"/"}> 
          <button className=" btn btn_seguir">
          Seguir comprando...
          </button>
          </Link>
    <hr/>
          <Formulario/>
        </>
        )
      }
      
    </div>
    </div>
  )
}
export default Cart