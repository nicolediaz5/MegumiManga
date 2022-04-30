import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from '../ItemDetail'


function ItemDetailContainer (){ 

const [producto, setDetalle] = useState ({})
const [cargando, setCargando] = useState (true)

const { detalleId } = useParams ()

 useEffect(() =>{
  const querydb = getFirestore()
  const queryProd = doc( querydb, 'productos', detalleId )

  getDoc(queryProd)
  .then(resp => setDetalle( { id:resp.id, ...resp.data()} ))
  .catch((err) => console.log(err))
  .finally(() => setCargando(false))
},[detalleId])
 
 return (
     <>        
{ cargando ?    <h2 >Cargando detalles...</h2> :
<>
<ItemDetail producto={producto}
            titulo={producto.titulo} 
            picUrl={producto.picUrl} 
            descrip={producto.descrip} 
            precio={producto.precio}  
            id={producto.id}/>      
</>
}    
</>
)
}


export default ItemDetailContainer