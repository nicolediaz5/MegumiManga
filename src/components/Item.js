import React from 'react'
import ItemCount from './ItemCount'
import './style.css'


const Item = ({titulo, precio, picUrl}) => {

 
  return (

<div className="col-12 mb-2 col-md-4" >
        <div className="card">
          <img src={picUrl} alt="" className="card-img-top"/>
          <div className="card-body">
            <h5>{titulo} </h5>
            <p>${precio}</p>
            <ItemCount />
          </div>
        </div>
      </div>

  
  )
}

export default Item