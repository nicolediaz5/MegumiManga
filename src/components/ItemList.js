import React from 'react'

const mangas = [ 
    {id:`1`, titulo: `Naruto`, precio: 550, picUrl: "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/a/naruto_cast__1.jpg"},
    {id:`2`, titulo: `Dragon Ball Z`, precio: 770, picUrl: "https://images-na.ssl-images-amazon.com/images/I/91V4lFuTzBL.jpg"},
    {id:`3`, titulo: `Ataque a los Titanes`, precio: 720, picUrl: "https://images-na.ssl-images-amazon.com/images/I/81ZyyhTCsRL.jpg"},
    {id:`4`, titulo: `Sakura Card Captor`, precio: 455, picUrl: "https://images-na.ssl-images-amazon.com/images/I/919mc8QlTYL.jpg"},
    {id:`5`, titulo: `NaNa`, precio: 650, picUrl: "https://images-na.ssl-images-amazon.com/images/I/91IdgmPwo2L.jpg"},
    {id:`6`, titulo: `Given`, precio: 360, picUrl: "https://images-na.ssl-images-amazon.com/images/I/81ZyyhTCsRL.jpg"},
  
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
    task
    .then(resp => {
      console.log(resp)
      return resp
    })
    .catch(err => console.log(err))
    .finally(() => console.log(`siempre ultimo`))
    


  return (
    <div></div>
  )
}

export default ItemList