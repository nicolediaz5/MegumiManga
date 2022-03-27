import React from 'react'
/*import ItemCount from './ItemCount'*/
import './style.css'


const Item = ({titulo, precio, picUrl}) => {

 
  return (

<div >
        <div className="card">
          <img src={picUrl} alt="" className="card-img-top"/>
          <div className="card-body">
            <h5>{titulo} </h5>
            <p>${precio}</p>
            <button className=" btn btn_add"> Ver más</button>
            {/*<ItemCount />*/}
          </div>
        </div>
      </div>

  
  )
}

export default Item