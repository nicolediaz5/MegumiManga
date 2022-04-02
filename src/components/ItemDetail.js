import React from 'react'

import ItemCount from './ItemCount'



 const ItemDetail = ({titulo, precio, descrip, picUrl}) => {

return (
    <div className='contenedorDetalle'>
<div className="card mb-3 cardDetalle ">
  <div className="">
    <div className="">
      <img src={picUrl} className="imgDetalle" alt="..."/>
    </div>
    <div className="card-body2 ">
      <div >
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle">${precio}</h6>
        <p className="card-text">{descrip}</p>
        <ItemCount /> 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
export default ItemDetail