import  { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext';


const Formulario = () => {

const {listaCarrito, removerCarrito, precioTotal} = useCartContext ()

    const generarOrden = (e) => {
        e.preventDefault();
        
        
        let orden = {}
        
        orden.comprador = dataFormulario
        orden.total = precioTotal()
        
        orden.items = listaCarrito.map( itemCarrito => {
          const id = itemCarrito.id
          const titulo = itemCarrito.titulo
          const precio = itemCarrito.precio * itemCarrito.count
          const cantidad = itemCarrito.count
        
          return { id, titulo, precio, cantidad}
        
        
        })
        

        const db = getFirestore ()
        const queryCollection = collection (db, 'ordenes' )
        addDoc( queryCollection, orden)
        .then(({id}) => alert("Este es tu codigo de compra: " + id))
        .catch((err) => console.log(err))
        .finally(removerCarrito)
        
        }


const [dataFormulario, setDataFormulario] = useState({

    nombre:"",
    email:"",
    telefono:""
})

console.log(dataFormulario)

const formulario = (event) => {
    setDataFormulario({
        ...dataFormulario,
        [event.target.name] : event.target.value
    })
}

  return (
    <div>
        <form onSubmit={generarOrden}>
          <input name='nombre' type="text" placeholder='ingrese el nombre' 
            onChange={formulario} 
            value={dataFormulario.nombre}/>
          <input name='email'type="text" placeholder='ingrese el email' 
            onChange={formulario} 
            value={dataFormulario.email}/>
          <input name='telefono' type="text" placeholder='ingrese el telefono' 
          onChange={formulario} 
          value={dataFormulario.telefono}/>

          <button className='btn btn_finish'> 
          Realizar Compra
          </button>
        </form>
    </div>
  )
}

export default Formulario