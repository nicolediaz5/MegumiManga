import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { query, collection, getDocs, getFirestore, where} from "firebase/firestore"


function ItemList (){ 

 


 const [cargando, setCargando] = useState (true)

 const { categoriaId } = useParams ()


  const [productos, setProductos] = useState ([])

 useEffect (() => {
const querydb = getFirestore()

const queryCollection = collection(querydb, 'productos')
if (categoriaId){
const queryFilter = query (queryCollection, where('categoria', '==', categoriaId))

getDocs(queryFilter)
.then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ) )
.catch(err => console.log(err))
.finally(()=> setCargando (false))
} 
else {
getDocs(queryCollection)
.then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ) )
.catch(err => console.log(err))
.finally(()=> setCargando (false))
}}
,[categoriaId])






  return (
    
    <> 
        { cargando ? <h2 >Cargando productos...</h2> : 

<div className='contenedor' >
 {productos.map((prod) => {
            return (
                <Item  key={prod.id} 
                titulo={prod.titulo} 
                precio={prod.precio} 
                picUrl={prod.picUrl} 
                id={prod.id} 
                categoria={prod.categoria}
                productos={productos}/>
                
            )
        }

        )
      }
</div>
        
       
        }

    </>
  )
}

export default ItemList