
import React from 'react'

import { useState } from 'react'

const ItemCount = () => {
    const count = 1;
    const stock = 10;
    
    const [cantidad, setCantidad] = useState (count);


    const añadirProducto = (numero) => {
        setCantidad(cantidad + numero);
    };

    const onAdd = (cantidad) => {
      alert (`Tenes ${cantidad} productos`)
    }

  return (
    <div className='d-grid gap-2 d-md-block'>

  <button className='btn btn_mas' onClick={() => añadirProducto(+1)} disabled={cantidad === stock ? true : null} >+</button>
  <span className='btn contenedor_cantidad'>{cantidad}</span>
  <button className='btn btn_menos' onClick={() => añadirProducto(-1)} disabled={cantidad === count ? true : null}>-</button>

  <br/>  
  <button className=" btn btn_add"  onClick={() => onAdd(cantidad)} disabled={stock === 0 ? true : null}>Añadir</button>
  


</div>
  )
}

export default ItemCount
