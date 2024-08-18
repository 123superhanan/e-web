import React   from 'react'
import "./Cart.css"
import { PRODUCTS } from '../../Product'
import { ContextShop } from '../../Context/ContextShop';
import { useContext } from 'react';
import CartItem from './Cart-item';

const Cert = () => {

  const { cartItems } = useContext(ContextShop);



  return (
    <>
    <div className="cart">

    <div className="cartTitle">
            <h1>Your Cart Items</h1>
        </div>
       
        <div className="cartItems">
                {PRODUCTS.map((product) =>{
                  if(cartItems[product.id] !== 0){
                    return <CartItem data={product}/>
                  }
                })}
                      
        </div>
<div className="checkout">
  <p>SubTotal :$</p>
  <div className="cartbutton">
  <button>Continue Shopping</button>
  <button>Checkout</button>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Cert
