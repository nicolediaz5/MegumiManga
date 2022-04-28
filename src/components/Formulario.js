import  { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../context/CartContext';

function validacion (valores) {

  let errores = {};
  const expresionesRegulares = /[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9]+){1,2}/

  if(!valores.nombre.trim()){
      errores.nombre = "Escriba su nombre y apellido"
  }

  if(!valores.email){
      errores.email = "Escriba su correo electronico"
  }else if(!expresionesRegulares.test(valores.email)){
      errores.email = "Escriba un correo válido"
  }

  if(!valores.emailRep){
    errores.emailRep = "Repita su correo electronico"
}else if(valores.emailRep !== valores.email){
    errores.emailRep = "Los correos no coinciden"
}

  if(!valores.telefono.trim()){
      errores.telefono = "Escriba un telefono de contacto"
  }

  return errores;
}

const Formulario = () => {



const {listaCarrito, removerCarrito, precioTotal} = useCartContext ()

const [dataFormulario, setDataFormulario] = useState({

    nombre:"",
    email:"",
    telefono:""
})

const [erroresFormulario,setErrores] = useState({})

const [validacionCorrecta, setValido] = useState (false)

    const generarOrden = (e) => {
        e.preventDefault();
        setErrores(validacion(dataFormulario))
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

      if (Object.keys(erroresFormulario).length === 0 && validacionCorrecta) { 

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
          
          <label>Nombre y Apellido</label>
       <br/>
        <input 
          name='nombre' 
          type="text" 
          placeholder='Juan Carlos' 
          onChange={formulario}
          value={dataFormulario.nombre}
        />
        <br/>
           {erroresFormulario && <strong>{erroresFormulario.nombre}</strong>}

            <label>Correo Electronico</label>
        <br/>
        <input 
          name='email'
          type="email" 
          placeholder='Ej.: juan@gmail.com' 
          onChange={formulario}
          value={dataFormulario.email}
        />
        <br/>
            {erroresFormulario && <strong>{erroresFormulario.email}</strong>}
      
            <label>Correo Electronico #2</label>
        <br/>
        <input 
          name='email'
          type="email" 
          placeholder='Repita su correo' 
          onChange={formulario}
          value={dataFormulario.emailRep}
        />
        <br/>
            {erroresFormulario && <strong>{erroresFormulario.emailRep}</strong>}
            <br/>

            <label>Telefono de contacto</label>
            <br/>
        <input 
          name='telefono'
          type="tel"
          placeholder='Contacto' 
          onChange={formulario} 
          value={dataFormulario.telefono}
        />
        <br/>
            {erroresFormulario && <strong>{erroresFormulario.telefono}</strong>}
          <hr/>          
<button type='submit' className='btn btn_finish'>Generar compra</button>
           
        </form>
    </div>
  )
}

export default Formulario