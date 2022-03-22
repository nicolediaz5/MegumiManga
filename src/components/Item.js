import React from 'react'
import ItemCount from './ItemCount'
import './style.css'


const Item = ({titulo, precio, picUrl}) => {

 
  return (
/*
    <div className="card" >
  <img src={picUrl} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">${precio}</p>

    <ItemCount />
  </div>
</div>*/

<div className="col-12 mb-2 col-md-4">
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