
import React from 'react'

import { useState } from 'react'
import { Link} from 'react-router-dom'



const ButtonFinish = () => {
  return (
    <Link to={"/cart"} >
      <button className=" btn btn_finish"  onClick={() => (console.log("producto en el carrito")) }>Terminar compra</button>
    </Link>
  )
}

const ButtonAdd = ({onAdd}) =>{
return (
<button className=" btn btn_add"  onClick={onAdd}>Añadir al carrito</button>
)
}


const ItemCount = () => {
    const count = 1;
    const stock = 10;
    
    const [cantidad, setCantidad] = useState (count);


    const añadirProducto = (numero) => {
        setCantidad(cantidad + numero);
    };

const [inputFinish, setFinish] = useState ("add")

    const onAdd = () => {
      setFinish("finish")
    }

  return (
    <div className='d-grid gap-2 d-md-block'>

  <button className='btn btn_mas' onClick={() => añadirProducto(+1)} disabled={cantidad === stock ? true : null} >+</button>
  <span className='btn contenedor_cantidad'>{cantidad}</span>
  <button className='btn btn_menos' onClick={() => añadirProducto(-1)} disabled={cantidad === count ? true : null}>-</button>

  <br/>  

{
  inputFinish === "add" ? 
   <ButtonAdd onAdd={onAdd} /> 
   : 
   <ButtonFinish />

}
  {/*<button className=" btn btn_add"  onClick={() => onAdd(cantidad)} disabled={stock === 0 ? true : null}>Añadir al carrito</button>*/}
  


</div>
  )
}

export default ItemCount
