
import { addToCart } from "./actions"
import  { removeToCart }  from "./actions"

export const  addCarlistThunk = (product) => (dispatch,getStore) => {

   const list = JSON.parse(localStorage.getItem('cart')) || []
   list.push(product)
   localStorage.setItem('cart', JSON.stringify(list))

   dispatch(addToCart(product))

}

export const  removeCartlistThunk = (idd) => (dispatch,getStore) => {
 
   const list = getStore()

   const {cartList} = list

  
   const cart = cartList.filter((elt) =>{ 
      console.log(elt.id , idd)
     
      return elt.id !== idd
   
   })
   localStorage.setItem('cart', JSON.stringify(cart))

    dispatch(removeToCart(cart))
 
 }

