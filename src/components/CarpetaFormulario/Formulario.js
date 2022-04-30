import  { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import './formulario.css'

function validacion (datosUsuario) {

  let invalido = {};
  const expresionesRegulares = /[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9]+){1,2}/

  if(!datosUsuario.nombre.trim()){
      invalido.nombre = "Escriba su nombre y apellido"
  }
  if(!datosUsuario.email){
      invalido.email = "Escriba su correo electronico"
  }else if(!expresionesRegulares.test(datosUsuario.email)){
      invalido.email = "Escriba un correo válido"
  }
  if(!datosUsuario.telefono.trim()){
      invalido.telefono = "Escriba un telefono de contacto"
  }

  return invalido;
}

const Formulario = () => {

const {listaCarrito, removerCarrito, precioTotal} = useCartContext ()
const [dataFormulario, setDataFormulario] = useState({

    nombre:"",
    email:"",
    telefono:""

})
const [invalidoFormulario,setinvalido] = useState({})
const [validacionCorrecta, setValido] = useState (false)

    const generarOrden = (e) => {

        e.preventDefault();
        setinvalido(validacion(dataFormulario))
        setValido(true)

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
        
       
      if (Object.keys(invalidoFormulario).length === 0 && validacionCorrecta) { 

        const db = getFirestore ()
        const queryCollection = collection (db, 'ordenes' )
        addDoc( queryCollection, orden)
        .then(({id}) => alert("Este es tu codigo de compra: " + id))
        .catch((err) => console.log(err))
        .finally(removerCarrito)
          
        }
}

const formulario = (event) => {
    setDataFormulario({
        ...dataFormulario,
        [event.target.name] : event.target.value
    })  
}

  return (
    <div>
        <form onSubmit={generarOrden}>          
          <label className='tituloLabel'>Nombre y Apellido</label>
       <br/>
        <input 
          className='form-control' 
          name='nombre' 
          type="text" 
          placeholder='Juan Carlos' 
          onChange={formulario}
          value={dataFormulario.nombre}
        />

           {invalidoFormulario && 
           <strong className='estiloError form-text'>
            {invalidoFormulario.nombre}</strong>}
           <br/>
            <label className='tituloLabel'>Correo Electronico</label>
        <br/>
        <input 
          className='form-control'        
          name='email'
          type="email" 
          placeholder='Ej.: juan@gmail.com' 
          onChange={formulario}
          value={dataFormulario.email}
        />
            {invalidoFormulario && 
            <strong className='estiloError form-text'>
            {invalidoFormulario.email}</strong>}
            <br/>
            <label className='tituloLabel'>Telefono de contacto</label>
            <br/>
        <input 
          className='form-control' 
          name='telefono'
          type="tel"
          placeholder='Contacto' 
          onChange={formulario} 
          value={dataFormulario.telefono}
        />
            {invalidoFormulario && 
            <strong className='estiloError form-text '>
            {invalidoFormulario.telefono}</strong>}
          <hr/>          
     <button type='submit' className='btn btn_finish'>
            Generar compra
      </button>
        </form>
    </div>
  )
}

export default Formulario