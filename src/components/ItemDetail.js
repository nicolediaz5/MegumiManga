

import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'



 const ItemDetail = (mangaDetalle, addItem) => {

const {addToCart } = useCartContext()

  function onAdd(cantidad) {
    
    addToCart({...mangaDetalle, count : cantidad})
    
  }




return (


    <div className='contenedorDetalle'>
<div className="card mb-3 cardDetalle ">
  <div className="">
    <div className="">
      <img src={mangaDetalle.picUrl} className="imgDetalle" alt="..."/>
    </div>
    <div className="card-body2 ">
      <div >
        <h5 className="card-title">{mangaDetalle.titulo}</h5>
        <h6 className="card-subtitle">${mangaDetalle.precio}</h6>
        <p className="card-text">{mangaDetalle.descrip}</p>

        <ItemCount count={1} stock={10} onAdd={onAdd} addToCart={addToCart} mangaDetalle={mangaDetalle} addItem={addItem} /> 
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
export default ItemDetail