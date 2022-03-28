import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail'

const mangaDetalle = [
    {id:`1`, titulo: `Naruto`, precio: 550, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://ramenparados.com/wp-content/uploads/2016/03/naruto72-1000x600-1457438662.jpg"},
    {id:`2`, titulo: `Dragon Ball Z`, precio: 770, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://as01.epimg.net/meristation/imagenes/2021/11/19/noticias/1637335232_173218_1637335678_noticia_normal.jpg"},
    {id:`3`, titulo: `Ataque a los Titanes`, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", precio: 720, picUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2020/11/ataque-titanes-2132051.jpg?itok=sAao6g2N"},
    {id:`4`, titulo: `Sakura Card Captor`, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", precio: 455, picUrl: "https://somoskudasai.com/wp-content/uploads/2020/05/portada_cardcaptor-sakura-juego-hap.jpg"},
    {id:`5`, titulo: `NaNa`, precio: 650, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2018/10/Nana-Wallpapers-5-1024x576.jpg"},
    {id:`6`, titulo: `Given`, precio: 360, descrip: "Todos han cumplido fielmente su misión: los kages presentes y pasados, Obito y el Equipo Siete. ¡He aquí el dramático desenlace de la espectacular historia de Naruto!", picUrl: "https://somoskudasai.com/wp-content/uploads/2020/07/portada_given-4.jpg"},
    
]

const task = new Promise ((resolve, reject) => {
  let condition = true 
  if (condition) { setTimeout(() => {
      resolve(mangaDetalle)
  }, 2000);
      
 
  } else {
      reject(`No se encontraron detalles de producto`)
  }
});


function ItemDetailContainer (){ 
 const { detalleId } = useParams ()

const [mangaDetalle, setDetalle] = useState ({})
const [cargando, setCargando] = useState (true)

 useEffect (() => {
   if(detalleId){

   
task
  .then(resp => {
      setDetalle(resp.find(mangaDetalle => mangaDetalle.titulo === detalleId))
    /*return resp*/
  })
  .catch(err => console.log(err))
  .finally(()=> setCargando (false))
 } 
}, [detalleId])

return (
  
  <> 
          { cargando ? <h2 >Cargando detalle del producto...</h2> : 

<>

              <ItemDetail titulo={mangaDetalle.titulo} picUrl={mangaDetalle.picUrl} descrip={mangaDetalle.descrip} precio={mangaDetalle.precio}    />
      
</>
      
     
      }
  </>
)
}


export default ItemDetailContainer