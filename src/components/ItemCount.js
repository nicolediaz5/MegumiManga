import { useState } from 'react'
import { Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const BotonTerminar = () => {
  return (
    <> 
    <Link to={"/cart"} >
      <button className=" btn btn_finish" onClick={() => {} }>
        Terminar compra
        </button>
    </Link>
    <Link to={"/"}> 
    <button className=" btn btn_seguir">
      Seguir comprando...
      </button>
    </Link>
  </>  
  )
}

const BotonAñadir = ({añadirItem}) =>{
return (
<button className=" btn btn_add" onClick={añadirItem}>
  Añadir al carrito
  </button>
)
}

const ItemCount = ({mangaDetalle, count, onAdd}) => {
    
    const stock = 10;
    
    const [cantidad, setCantidad] = useState (count);


    const añadirProducto = (numero) => {
        setCantidad(cantidad + numero);
    };

const [inputTerminar, setTerminar] = useState ("añadir")


const { añadirAlCarrito} = useCartContext()
    
const añadirItem = () => {
      setTerminar("terminar")
      añadirAlCarrito(mangaDetalle)
      onAdd(cantidad)
    }

  return (
    <div className='d-grid gap-2 d-md-block'>
    
 <button className='btn btn_mas' onClick={() => añadirProducto(+1)} disabled={cantidad === stock ? true : null} >+</button>
  <span className='btn contenedor_cantidad'>{cantidad}</span>
  <button className='btn btn_menos' onClick={() => añadirProducto(-1)} disabled={cantidad === count ? true : null}>-</button>
  <br/>  

{ inputTerminar === "añadir" ? 
   <BotonAñadir  añadirItem={añadirItem} onAdd={onAdd}/> 
   : 
   <BotonTerminar   />
}
</div>
  )
}

export default ItemCount
