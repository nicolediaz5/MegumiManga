


import { useState } from 'react'
import { Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext'





const ButtonFinish = () => {
  return (
    <Link to={"/cart"} >
      <button className=" btn btn_finish" onClick={() => {(console.log("producto en el carrito"))} }>Terminar compra</button>
    </Link>
  )
}

const ButtonAdd = ({addItem}) =>{
return (
<button className=" btn btn_add" onClick={addItem}>Añadir al carrito</button>
)
}


const ItemCount = ({mangaDetalle, count, onAdd}) => {
    //const count = 1;
    const stock = 10;
    
    const [cantidad, setCantidad] = useState (count);


    const añadirProducto = (numero) => {
        setCantidad(cantidad + numero);
    };

const [inputFinish, setFinish] = useState ("add")


const { addToCart} = useCartContext()
    
const addItem = () => {
      setFinish("finish")
      addToCart(mangaDetalle)
      onAdd(cantidad)
    }



    

  return (
    <div className='d-grid gap-2 d-md-block'>
    
 <button className='btn btn_mas' onClick={() => añadirProducto(+1)} disabled={cantidad === stock ? true : null} >+</button>
  <span className='btn contenedor_cantidad'>{cantidad}</span>
  <button className='btn btn_menos' onClick={() => añadirProducto(-1)} disabled={cantidad === count ? true : null}>-</button>
  <br/>  

{
  inputFinish === "add" ? 
   <ButtonAdd  addItem={addItem} onAdd={onAdd}/> 
   : 
   <ButtonFinish   />

}
</div>
  )
}

export default ItemCount
