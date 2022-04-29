import { Link } from 'react-router-dom'
import './style.css'

const Item = (mangas) => {

  return (

<div >
        <div className="card">
          <img src={mangas.picUrl} alt="" className="card-img-top"/>
          <div className="card-body">
            <h5>{mangas.titulo} </h5>
            <p className='precioItem'>${mangas.precio}</p>
            <Link to={`/detalle/${mangas.id}`}>
            <button className=" btn btn_add"> Ver más</button>
            </Link>
           
          </div>
        </div>
      </div>

  
  )
}

export default Item