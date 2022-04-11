import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
/*import { query, collection, getDocs, getFirestore, where} from "firebase/firestore"*/

const mangas = [ 
    {id:`1`, titulo: `Naruto`, categoria: "shonen", precio: 550, picUrl: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto_cast__1.jpg"},
    {id:`2`, titulo: `Dragon Ball Z`, categoria: "seinen",  precio: 770, picUrl: "https://images-na.ssl-images-amazon.com/images/I/91V4lFuTzBL.jpg"},
    {id:`3`, titulo: `Ataque a los Titanes`, categoria: "shonen", precio: 720, picUrl: "https://images-na.ssl-images-amazon.com/images/I/81fBFsAAlgL.jpg"},
    {id:`4`, titulo: `Sakura Card Captor`, categoria: "seinen", precio: 455, picUrl: "https://images-na.ssl-images-amazon.com/images/I/919mc8QlTYL.jpg"},
    {id:`5`, titulo: `NaNa`, categoria: "shonen", precio: 650,  picUrl: "https://images-na.ssl-images-amazon.com/images/I/91IdgmPwo2L.jpg"},
    {id:`6`, titulo: `Given`, categoria: "seinen", precio: 360, picUrl: "https://images-na.ssl-images-amazon.com/images/I/81ZyyhTCsRL.jpg"},
   
  
  ]
  
  const task = new Promise ((resolve, reject) => {
    let condition = true 
    if (condition) { setTimeout(() => {
        resolve(mangas)
    }, 3000);
        
   
    } else {
        reject(`No se encontraron los productos`)
    }
  });

 
function ItemList (){ 

 
const [mangas, setMangas] = useState ([])

 const [cargando, setCargando] = useState (true)

 const { categoriaId } = useParams ()


 /* const [productos, setProductos] = useState ([])*/
/*
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

console.log(productos)
*/


   useEffect (() => {
if( categoriaId) {
  task
    .then(resp => {
        setMangas(resp.filter (item => item.categoria === categoriaId))
      
    })
    .catch(err => console.log(err))
    .finally(()=> setCargando (false))
}
else {
task
    .then(resp => {
        setMangas(resp)
      return resp
    })
    .catch(err => console.log(err))
    .finally(()=> setCargando (false))
    }
}, [categoriaId])

  return (
    
    <> 
        { cargando ? <h2 >Cargando productos...</h2> : 

<div className='contenedor' >
 {mangas.map((prod) => {
            return (
                <Item  key={prod.id} titulo={prod.titulo} precio={prod.precio} picUrl={prod.picUrl} id={prod.id} categoria={prod.categoria}/>
                
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