import React from 'react'
import { Link } from 'react-router-dom'


import './style.css'


const Item = ({titulo, precio, picUrl}) => {

 
  return (

<div >
        <div className="card">
          <img src={picUrl} alt="" className="card-img-top"/>
          <div className="card-body">
            <h5>{titulo} </h5>
            <p>${precio}</p>
            <Link to={`/detalle/${titulo}`}>
            <button className=" btn btn_add"> Ver más</button>
            </Link>
           
          </div>
        </div>
      </div>

  
  )
}

export default Item