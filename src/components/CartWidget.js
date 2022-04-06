import './style.css'

import React from 'react'
import { useCartContext } from '../context/CartContext'



export default function CartWidget() {
  const {cartList} = useCartContext ()

   const countCartProds = cartList.length
  return (
  <>
    {countCartProds ? (
     <button type="button" className="btn btn-primary position-relative">
    {countCartProds}</button>
    ): ("")
    }
    
   </>
  )
}

