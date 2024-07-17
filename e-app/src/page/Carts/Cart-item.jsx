import React from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { ContextShop } from '../../Context/ContextShop';


const CartItem = (props) => {
  const { id, price, productName, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ContextShop);

  return (
    <>
      <div className="cart-item">

<img src={productImage} alt="" />
<div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className="countHandeler">
            <button onClick={() => removeFromCart(id)} >-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)}  >+</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default CartItem
