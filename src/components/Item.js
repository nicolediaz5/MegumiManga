import React from 'react'
import ItemCount from './ItemCount'

const Item = ({titulo, precio, picUrl}) => {

 
  return (

    <div className="card" >
  <img src={picUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">${precio}</p>

    <ItemCount />
  </div>
</div>

  )
}

export default Item