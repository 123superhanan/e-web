import React, { useContext } from 'react';
import { ContextShop } from '../../Context/ContextShop';

const Product = (props) => {
  const { id, price, productName, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ContextShop);

  const cartItemAmount = cartItems[id];
  
  return (
    <div className="product">
      <img src={productImage} alt="Product" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Product;
