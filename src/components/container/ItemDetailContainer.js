import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail'

const mangaDetalle = [
    {id:`1`, titulo: `Naruto`, precio: 550, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://ramenparados.com/wp-content/uploads/2016/03/naruto72-1000x600-1457438662.jpg"},
    {id:`2`, titulo: `Naruto`, precio: 550, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto_cast__1.jpg"}
  
]

const task = new Promise ((resolve, reject) => {
  let condition = true 
  if (condition) { setTimeout(() => {
      resolve(mangaDetalle)
  }, 3000);
      
 
  } else {
      reject(`No se encontraron detalles de producto`)
  }
});


function ItemDetailContainer (){ 
const [mangaDetalle, setDetalle] = useState ({})
const [cargando, setCargando] = useState (true)

 useEffect (() => {
task
  .then(resp => {
      setDetalle(resp.find(detail => detail.id === "1"))
    return resp
  })
  .catch(err => console.log(err))
  .finally(()=> setCargando (false))
  
}, [])

return (
  
  <> 
          { cargando ? <h2 >Cargando detalle del producto...</h2> : 

<>

              <ItemDetail detail={mangaDetalle} titulo={mangaDetalle.titulo} picUrl={mangaDetalle.picUrl} descrip={mangaDetalle.descrip} precio={mangaDetalle.precio}    />
      
</>
      
     
      }
  </>
)
}


export default ItemDetailContainer