import React from 'react'
import "./Shop.css"
import {PRODUCTS} from "../../Product.js"
import Product from './Product'

const Shop = () => {
  return (
    <>
     <div className="shop">

        <div className="shopTitle">
            <h1>Abbasids Store</h1>
        </div>

        <div className="products">
{PRODUCTS.map((product) => <Product  data={product} /> )}
        </div>

     </div>
    </>
  )
}

export default Shop
